from django.core.mail import send_mail
from django.conf import settings

def send_invitation_email(instance):
    send_mail(
        '%s has invited you to join %s at Bandalists!' % (instance.invited_by, instance.band.name),
        'Hello, if you want to join %s, please click <a href="https://bandalists.com/register/?token=%s">here</a>. Thank you.' % (instance.band.name, instance.token),
        settings.FROM_EMAIL,
        [instance.email],
        fail_silently=False,
    )
