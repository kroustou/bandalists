from rest_framework.test import APIClient
from django.test import TestCase
from django.contrib.auth import get_user_model


class BandTestCase(TestCase):

    def setUp(self):
        self.sample_password = 'top_secret'
        self.user = get_user_model().objects.create_user(
            username='test_user',
            email='test@test.com',
            password=self.sample_password
        )
        self.client = APIClient()
        self.key = self.client.post(
            '/rest-auth/login/',
            {
                'username': self.user.username,
                'password': self.sample_password
            }
        ).data.get('key')
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + self.key)

    def test_band_user(self):
        # create band
        response = self.client.post('/bands/', {'name': 'test_band'})
        self.assertEqual(response.data.get('name'), 'test_band')

        # get slug
        band = self.user.band_set.all()[0].slug

        # the band belongs to us
        self.assertEqual(
            band,
            response.data.get('slug')
        )

        # edit band
        response = self.client.patch(
            '/bands/%s/' % (
                band
            ),
            {
                'name': 'edited name',
                'members': [self.user.pk],

            }
        )
        self.assertEqual(
            response.data.get('name'),
            'edited name'
        )

        # delete band
        self.client.delete(
            '/bands/%s/' % (
                band
            )
        )

        self.assertTrue(
            len(self.user.band_set.all()) == 0
        )


class InstrumentTestCase(TestCase):

    def setUp(self):
        self.sample_password = 'top_secret'
        self.user = get_user_model().objects.create_user(
            username='test_user',
            email='test@test.com',
            password=self.sample_password
        )
        self.client = APIClient()
        self.key = self.client.post(
            '/rest-auth/login/',
            {
                'username': self.user.username,
                'password': self.sample_password
            }
        ).data.get('key')
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + self.key)
        from bands.models import Band
        self.band = Band(name='test')
        self.band.save()

    def test_instrument(self):
        # add instrument
        response = self.client.post('/bands/', {'name': 'test_band'})
        band = response.data.get('id')
        response = self.client.post(
            '/instruments/',
            {
                'name': 'guitar',
                'band': band,
            }
        )
        instrument = response.data.get('id')
        self.assertEqual(response.status_code, 201)

        # the user must now have one instument
        response = self.client.get('/instruments/')
        self.assertEqual(len(response.data.get('results')), 1)

        # edit instrument
        response = self.client.put(
            '/instruments/%s/' % instrument,
            {
                'name': 'guitara',
                'band': band,
            }
        )
        self.assertEqual(response.data.get('name'), 'guitara')
        self.assertEqual(response.status_code, 200)

        # remove instrument
        self.client.delete('/instuments/%s' % instrument)

        # the user must now have no instruments
        response = self.client.get('/instruments/')
        self.assertEqual(len(response.data.get('results')), 1)
