from rest_framework.test import APIClient
from django.test import TestCase

from django.contrib.auth import get_user_model
from bands.models import Band


class DiscussionTestCase(TestCase):

    def setUp(self):
        self.user = get_user_model().objects.create_user(
            username='test_user',
            email='test@test.com',
            password='pass'
        )
        # user belongs to a band
        self.band = Band(name="testband", slug="test_band")
        self.band.save()
        self.band.members.add(self.user)
        self.band.save()
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

    def test_threads_for_user(self):
        # create a thread
        response = self.client.post('/threads/', {
            'text': 'test',
            'dashboard': self.band.pk,
        })
        self.assertEqual(response.status_code, 201)

        # get all threads
        response = self.client.get('/threads/')
        self.assertEqual(response.status_code, 200)

        # should get one thread
        self.assertEqual(len(response.data.get('results')), 1)

        # post a comment on the first thread
        response = self.client.post('/threads/', {
            'text': 'test-comment',
            'dashboard': self.band.pk,
            'parent': response.data.get('results')[0].get('id')
        })
        self.assertEqual(response.status_code, 201)
