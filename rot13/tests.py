import unittest

from pyramid import testing


class ViewTests(unittest.TestCase):
    def setUp(self):
        self.config = testing.setUp()
        from pyramid.paster import get_app
        app = get_app("test.ini")
        from webtest import TestApp
        self.testapp = TestApp(app)

    def tearDown(self):
        testing.tearDown()

    def test_view_mainPageGet(self):
        from .views import mainPageGet
        request = testing.DummyRequest()
        info = mainPageGet(request)
        print(info)
        self.assertEqual(info['text'], 'Enter text')

    def test_mainPageGet(self):
        resp = self.testapp.get('/')
        self.assertEqual(resp.status_code, 200)

    def test_mainPagePost_rot13(self):
        resp = self.testapp.post('/', {'rot_mode': "0", 'text': "Hello World!"})
        self.assertEqual(resp.status_code, 200)
        self.assertTrue(False)
