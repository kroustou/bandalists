# in routing.py
from channels.routing import route
from notifications.consumers import ws_add, ws_message

channel_routing = [
    route("websocket.connect", ws_add),
    route("websocket.receive", ws_message),
]
