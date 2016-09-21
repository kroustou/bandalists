from channels import Group
import json
from .jwt_decorators import (
    jwt_request_parameter, jwt_message_text_field
)
from .utils import reply

@jwt_request_parameter
def ws_add(message):
    Group(message.user.auth_token.key).add(message.reply_channel)


@jwt_message_text_field
def ws_message(message):
    reply(json.loads(message.text), message.user)

