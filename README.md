# Bandalists

This is a web app for band management.

## Backend
Django 1.9 with django rest framework.
Endpoints:

Installation:

	$ mkvirtualenv bandalists
	$ pip install -r requirements.txt
	$ cd bandalists_drf/ && ./manage.py runserver

## Auth
url: `/rest-auth/` post: username/password -> token

### Apps/Features

#### Bands
##### url: `/bands/`

Lists the bands of the current user.

##### url: `/instrument/`
Lists the instruments a user plays for each band.

### Threads
url: `/threads/`

Lists the threads that a user can see meaning they belong to a band's dashboard.
A thread can have a parent (in order to act as a comment to its parent). Also if
a user reads a thread, it's marked as 'seen' for this user. If the user is
the author, then the thread is marked as 'seen' on creation.

### Notifications
url: `/notifications/`

Creates a notification for a user.

#### Websocket
When a new notification object is saved, then
it's being pushed to the redis/websocket.


#### Hooks for other apps
Into `receivers.py` you can bind hooks for each model that you would like to create
notifications for.
