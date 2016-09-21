from channels import Group


def push_notification(channel, message):
    if channel:
        Group(channel).send({"text": message})


def reply(action, user):
    Group(user.token.key).send({"text": action})
