# from django.test import TestCase, Client

# from django.contrib.auth.models import User
# from bands.models import Band


# class DiscussionTestCase(TestCase):

#     def setUp(self):
#         self.sample_password = 'top_secret'
#         self.user = User.objects.create_user(
#             username='test_user',
#             email='test@test.com',
#             password=self.sample_password
#         )
#         # user balongs to a band
#         self.band = Band(name="testband", slug="test_band")
#         self.band.save()
#         self.band.members.add(self.user)
#         self.band.save()
#         self.band.thread_set.create(
#             dashboard=self.band,
#             text='test',
#             author=self.user
#         )
#         # seccond band for the same user
#         self.band2 = Band(name="testband2", slug="test_band2")
#         self.band2.save()
#         self.band2.members.add(self.user)
#         # second comment
#         self.band2.thread_set.create(
#             dashboard=self.band,
#             text='test_band_2',
#             author=self.user
#         )
#         # second user member of second band
#         self.user2 = User.objects.create_user(
#             username='test_user2',
#             email='test2@test.com',
#             password=self.sample_password
#         )
#         self.band2.members.add(self.user2)
#         self.client = Client()

#     def test_threads_for_user(self):
#         self.client.login(
#             username=self.user.username,
#             password=self.sample_password
#         )
#         response = self.client.get('/threads/')
#         self.assertEqual(response.status_code, 200)
#         self.assertEqual(len(response.json()), 2)
#         self.assertEqual(response.json()[1].get('text'), 'test')
#         self.assertEqual(response.json()[0].get('text'), 'test_band_2')

#         self.client.login(
#             username=self.user2.username,
#             password=self.sample_password
#         )
#         response = self.client.get('/threads/')
#         self.assertEqual(response.status_code, 200)
#         self.assertEqual(len(response.json()), 1)
#         self.assertEqual(response.json()[0].get('text'), 'test_band_2')
#         self.assertEqual(response.json()[0].get('dashboard'), self.band2.pk)

#     def test_thread_functions(self):
#         thread = self.band.thread_set.all()[0]
#         self.assertEqual(thread.channel, 'dashboard-test_band')
#         self.assertEqual(len(thread.children), 0)
#         self.assertEqual(thread.get_notification_message().get('text'), 'test')
