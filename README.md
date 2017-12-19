![alt text](https://codeship.com/projects/31df1030-bcba-0134-405a-76ab691be209/status?branch=master "Codeship")
[![Coverage Status](https://coveralls.io/repos/github/kroustou/bandalists/badge.svg?branch=master)](https://coveralls.io/github/kroustou/bandalists?branch=master)

# Bandalists
This is a web app for band management and communication.


# Run for development

## Backend
You have to install pip and virtualenv in order to run the server.


installation:

    mkdir ~/.virtualenvs
    cd bandalists_drf
    virtualenv ~/.virtualenvs/bandalists
    source !$
    pip install -r requirements.txt
    ./manage.py migrate

running:

    source ~/.virtualenvs/bandalists
    ./manage.py runserver

admin interface:

    http://localhost:8000/admin

it would be a good idea to create a band for your user from the admin interface in order to see what is happening. (Dashboard and Bands are the only menu items which are currently under development)

## Serving media
`cd bandalists_drf/public && python -m SimpleHTTPServer 8001`


## Redis server
Bandalists uses websockets, notifications are being pushed through redis.
You need to setup and start redis!

## Frontend
To run the frontend just:

    cd frontend
    npm install
    npm start

## Usage
go to `http://localhost:3000` and voila.

- Create a profile
- create a band
- go to dashboard and talk with yourself or invite friends

# How it works

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
