# from django.test import TestCase, Client
# from django.contrib.auth import get_user_model

# User = get_user_model()


# class BandTestCase(TestCase):
#     def setUp(self):
#         from bands.models import Band
#         self.sample_password = 'top_secret'
#         self.user = User.objects.create_user(
#             username='test_user',
#             email='test@test.com',
#             password=self.sample_password
#         )
#         self.band = Band(name="testband", slug="test_band")
#         self.band.save()
#         self.band.members.add(self.user)
#         self.band.save()
#         self.user2 = User.objects.create_user(
#             username='test_user2',
#             email='test2@test.com',
#             password=self.sample_password
#         )
#         self.band2 = Band(name="testband2", slug="test_band2")
#         self.band2.save()
#         self.band2.members.add(self.user)
#         self.band2.save()
#         self.client = Client()

#     def test_band_user(self):
#         self.assertTrue(self.user in self.band.members.all())
#         self.assertFalse(self.user2 in self.band.members.all())
#         self.client.login(
#             username=self.user.username,
#             password=self.sample_password
#         )
#         response = self.client.get('/bands/')
#         self.assertEqual(response.status_code, 200)
#         # make sure the repsonse has both bands
#         self.assertEqual(len(response.json()), 2)
#         for band in response.json():
#             self.assertTrue(
#                 band.get('slug') in ['test_band', 'test_band2']
#             )

#     def test_user_band(self):
#         self.assertTrue(self.band in self.user.band_set.all())
#         self.assertTrue(self.band2 in self.user.band_set.all())
#         self.assertFalse(self.band in self.user2.band_set.all())
#         self.assertFalse(self.band2 in self.user2.band_set.all())
