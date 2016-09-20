# In consumers.py
from channels import Group
from channels.auth import channel_session_user, channel_session_user_from_http

# Connected to websocket.connect
@channel_session_user_from_http
def ws_add(message):
    Group(message.user.auth_token.key).add(message.reply_channel)

# # Connected to websocket.receive
# @channel_session_user
# def ws_message(message):
#     Group(message.user.username).send({
#         "text": message['text'],
#     })

# Connected to websocket.disconnect
@channel_session_user
def ws_disconnect(message):
    Group(message.user.auth_token.key).discard(message.reply_channel)
