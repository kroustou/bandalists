from functools import wraps
from channels.handler import AsgiRequest
from rest_framework.authtoken.models import Token
import json


def authenticate(token):
    try:
        obj = Token.objects.get(key=token)
    except Token.ObjectDoesNotExist:
        return False
    return obj.user


def jwt_request_parameter(func):
    """
    Checks the presence of a "token" request parameter and tries to
    authenticate the user based on its content.
    """
    @wraps(func)
    def inner(message, *args, **kwargs):
        try:
            if "method" not in message.content:
                message.content['method'] = "FAKE"
            request = AsgiRequest(message)
        except Exception as e:
            raise ValueError("Cannot parse HTTP message - are you sure this is a HTTP consumer? %s" % e)
        token = request.GET.get("token", None)
        if token is None:
            raise ValueError("Missing token request parameter. Closing channel.")

        message.token = token
        user = authenticate(token)
        message.user = user
        return func(message, *args, **kwargs)
    return inner


def jwt_message_text_field(func):
    """
    Checks the presence of a "token" field on the message's text field and
    tries to authenticate the user based on its content.
    """
    @wraps(func)
    def inner(message, *args, **kwargs):
        message_text = message.get('text', None)
        if message_text is None:
            raise ValueError("Missing text field. Closing channel.")

        try:
            message_text_json = json.loads(message_text)
        except ValueError:
            raise

        token = message_text_json.pop('token', None)
        if token is None:
            raise ValueError("Missing token field. Closing channel.")

        user = authenticate(token)

        message.token = token
        message.user = user
        message.text = json.dumps(message_text_json)

        return func(message, *args, **kwargs)
    return inner
