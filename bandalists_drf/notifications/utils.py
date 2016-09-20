from channels import Group


def push_notification(channel, message):
    Group(channel).send({"text": message})
