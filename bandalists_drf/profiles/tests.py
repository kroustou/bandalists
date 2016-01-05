from rest_framework.test import APIClient
from django.test import TestCase
from django.contrib.auth import get_user_model


class AnonymousUserTestCase(TestCase):

    def setUp(self):
        self.client = APIClient()

    def test_create_user(self):
        response = self.client.post(
            '/me/',
            {
                'username': 'test_user',
                'password': 'pass',
                'email': 'test@test.gr'
            }
        )
        # the response should return the api key (token)
        # for the user.
        self.assertTrue('key' in response.data.keys())
        # make sure the user we just posted
        # was created
        get_user_model().objects.get(username='test_user')

    def test_anonymous_user_access(self):
        # make sure anonymous users has only post access
        # at this url.
        response = self.client.get('/me/')
        self.assertNotEqual(response.status_code, 200)

        response = self.client.put('/me/')
        self.assertNotEqual(response.status_code, 200)

        response = self.client.delete('/me/')
        self.assertNotEqual(response.status_code, 200)


class UserEditTestCase(TestCase):

    def setUp(self):
        self.client = APIClient()
        self.user = get_user_model().objects.create_user(
            username='test',
            email='test@test.com',
            password='pass'
        )
        self.user.save()
        response = self.client.post(
            '/rest-auth/login/',
            {
                'username': 'test',
                'password': 'pass'
            },
            format='json'
        )
        self.key = response.data.get('key')
        self.assertNotEqual(self.key, None)
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + self.key)

    def test_access_user_profile(self):
        # make sure authorized users have access to
        # their profile details
        response = self.client.get('/me/')
        self.assertEqual(response.status_code, 200)

    def test_edit_user_profile(self):
        # make sure authorized users have access to
        # their profile details
        response = self.client.put('/me/', {'surname': 'test'})
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['surname'], 'test')

    def test_delete_user_profile(self):
        response = self.client.delete('/me/')
        self.assertEqual(response.status_code, 202)
