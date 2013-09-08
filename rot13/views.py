from pyramid.view import view_config
from rot13 import rot13utils

@view_config(route_name='home', request_method='GET', renderer='rot13.jinja2')
def mainPageGet(request):
    return {}

@view_config(route_name='home', request_method='POST', renderer='rot13.jinja2')
def mainPagePost(request):
    mode = request.POST.getone('rot_mode')
    if mode.isdigit():
        mode = int(mode)
    else:
        mode = 0

    text = request.POST.getone('text')
    text = rot13utils.encr(text, mode)

    return {'text': text, 'mode': mode}
