import json
from django.core.mail import send_mail
from django.conf import settings
from django.template.loader import render_to_string


def send_invitation_email(instance):
    send_mail(
        '%s has invited you to join %s at Bandalists!' % (
            instance.invited_by,
            instance.band.name
        ),
        'Hello, if you want to join %s, please click \
        <a href="https://bandalists.com/sign-up/?token=%s">here</a>. Thank \
        you.' % (instance.band.name, instance.token),
        settings.FROM_EMAIL,
        [instance.email],
        fail_silently=False,
    )


def send_notification_email(instance):
    message_dict = json.loads(instance.message)
    try:
        message = render_to_string(
            'emails/%s.txt' % instance.notification_type,
            {'instance': instance, 'message_dict': message_dict}
        )
    except:
        # ToDo
        pass
    else:
        send_mail(
            'There is some activity in %s!' % (
                instance.dashboard.name
            ),
            message,
            settings.FROM_EMAIL,
            [instance.for_user.email],
            fail_silently=False,
        )
