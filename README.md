# Bandalists

This is a web app for band management.

## Backend
Django 1.9 with django rest framework.
Endpoints:

Installation:

if on Debian please make sure you have installed:

	libffi-dev libssl-dev libxml2-dev libxslt1-dev libncurses5-dev

	$ mkvirtualenv bandalists
	$ pip install -r requirements.txt
	$ cd bandalists_drf/ && ./manage.py runserver

## Auth
url: `/rest-auth/` post: username/password -> token

### Apps/Features

#### Bands
##### url: `/bands/`

Lists the bands of the current user.

##### `/bands/<slug>`
gets the band with the given slug

##### url: `/instrument/`
Lists the instruments a user plays for each band.

### Threads
url: `/threads/`

Lists the threads that a user can see meaning they belong to one of his band's dashboard.
A thread can have a parent (in order to act as a comment to its parent). Also if
a user reads a thread, it's marked as 'seen' for this user. If the user is
the author, then the thread is marked as 'seen' on creation.

##### Filters
`?dashboard=<dashboard_id>`

Lists the threads for a specific dashboard.

### Notifications
url: `/notifications/`

Creates a notification for a user.

#### Websocket
When a new notification object is saved, then
it's being pushed to the redis/websocket.


#### Hooks for other apps
Into `receivers.py` you can bind hooks for each model that you would like to create
notifications for.


### Profiles

url: `/me/`

##### get:
Shows logged users details

##### post:
Creates user if not authenticated
(username, password, email)

##### put:
changes users values:
(username, name, surname, avatar (file), password, email)

##### delete:
removes my account

##### get
url: `/user/<id>/`
gets user's with id=id details
