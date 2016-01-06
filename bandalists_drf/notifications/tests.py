from rest_framework.test import APIClient
from django.test import TestCase

from django.contrib.auth import get_user_model
from bands.models import Band
from discussion.models import Thread


class DiscussionTestCase(TestCase):

    def setUp(self):
        # create tow users
        self.user = get_user_model().objects.create_user(
            username='test_user',
            email='test@test.com',
            password='pass'
        )

        self.user2 = get_user_model().objects.create_user(
            username='test_user2',
            email='test@test.com',
            password='pass'
        )

        # users are band mates
        self.band = Band(name="testband", slug="test_band")
        self.band.save()
        self.band.members.add(self.user)
        self.band.members.add(self.user2)
        self.band.save()

        # one user makes a new post
        Thread.objects.create(author=self.user2, text='test', dashboard=self.band)

        self.client = APIClient()

        # get user token
        self.key = self.client.post(
            '/rest-auth/login/',
            {
                'username': self.user.username,
                'password': 'pass'
            }
        ).data.get('key')
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + self.key)

    def test_notification_for_user2(self):
        # get all notifications
        response = self.client.get('/notifications/')
        self.assertEqual(response.status_code, 200)

        # should get one notification
        self.assertEqual(len(response.data.get('results')), 1)

        notification = response.data.get('results')[0]

        # set the notification to read
        response = self.client.put(
            '/notifications/%s/' % notification.get('id'),
            {
                'read': True,
                'text': notification.get('text'),
                'url': notification.get('url'),
                'message': notification.get('message'),
            }
        )
        self.assertTrue(response.data.get('read'))

    def test_cannot_create_notification(self):
        response = self.client.post('/notifications/')
        self.assertEqual(response.status_code, 405)
