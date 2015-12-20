import redis

REDIS = redis.StrictRedis(host='localhost', port=6379, db=0)


def push_notification(channel, message):
    # push to websocket
    REDIS.publish(channel, message)
