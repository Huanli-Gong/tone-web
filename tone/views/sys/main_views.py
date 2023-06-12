import os
import mimetypes
from django.http import HttpResponse


def index(request):
    base_path = os.path.dirname(__file__).split('tone' + os.sep)[0]
    if '/static/' in request.path:
        index_file = os.path.join(base_path, 'static', request.path.split('/static/', 1)[1])
    else:
        index_file = os.path.join(base_path, 'static', 'front', 'index.html')
    content_type, _ = mimetypes.guess_type(index_file)
    with open(index_file, 'rb') as f:
        if index_file.endswith('.html'):
            return HttpResponse(
                f.read().decode().replace('{TONE_WEB_RENDER_TONE_FRONT_REPLACE_KEY}', 'static/front'),
                content_type=content_type)
        else:
            return HttpResponse(f.read(), content_type=content_type)
