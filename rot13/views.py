from pyramid.view import view_config
from rot13 import rot13utils

@view_config(route_name='home', renderer='rot13.jinja2')
def mainPageGet(request):
    return {}

@view_config(route_name='encr', request_method='POST', renderer='string')
def encrypt(request):
    try:
        mode = request.POST.getone('rot_mode')
    except KeyError:
        mode = "0";

    if mode.isdigit():
        mode = int(mode)
    else:
        mode = 0

    try:
        text = request.POST.getone('text')
    except KeyError:
        text = ""

    text = rot13utils.encr(text, mode)
    return text
