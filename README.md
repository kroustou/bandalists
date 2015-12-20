# Bandalists

This is a web app for band management.

## Backend
Django 1.9 with django rest framework.
Endpoints:

- `/threads/`, provides all comments from a users bandmates.
- `/bands/`, lists a users bands.

Installation:

	$ mkvirtualenv bandalists
	$ pip install -r requirements.txt
	$ cd bandalists_drf/ && ./manage.py runserver

