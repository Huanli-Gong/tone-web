'''
Django settings for tone project.

Generated by 'django-admin startproject' using Django 3.0.5.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.0/ref/settings/
'''

import os

from tone.core.utils.config_parser import cp

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "../"))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '*)sp@4@+x!(vprr^8c+rxr4%^p8!x5qw5#wma+*9-xbb1yb+-6'

DEBUG = False if cp.get('env') == 'prod' else True

ALLOWED_HOSTS = ['*']


# Application definition

# sys.path.insert(0, os.path.join(BASE_DIR, 'apps'))

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django_extensions',
    'tone',
    'rest_framework',
    'django_q',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'tone.core.common.middlewares.DisableCSRFCheck',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'tone.core.utils.permission_manage.ValidPermission',
]

ROOT_URLCONF = 'tone.main_urls'
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            os.path.join(BASE_DIR, 'templates'),
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'tone.wsgi.application'

# Password validation
# https://docs.djangoproject.com/en/3.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'Asia/Shanghai'

USE_I18N = True

USE_L10N = True

USE_TZ = False


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.0/howto/static-files/

STATIC_URL = '/static/static/'
STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'static/'),
)
STATIC_ROOT = os.path.join(BASE_DIR, '/static/').replace('\\', '/')

MEDIA_URL = '/static/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'static/media/').replace('\\', '/')

ENV_TYPE = cp.get('env')
CDN_DOMAIN = cp.get('cdn_domain')

APP_DOMAIN = cp.get('tone_outside_domain')

GOLDMINE_DOMAIN = cp.get('goldmine_domain')
CBP_API_TOKEN = cp.get('cbp_api_token')

DEBUG_NOTICE_TO = cp.get('debug_notice_to')

ENV_MODE = cp.get('env_mode')
KAFKA_SERVERS_LIST = cp.get('kafka_servers_list')
DATA_UPLOAD_MAX_MEMORY_SIZE = 1024 * 1024 * 100

SESSION_COOKIE_AGE = 60 * 60 * 24 * 7
SESSION_SAVE_EVERY_REQUEST = True
SESSION_EXPIRE_AT_BROWSER_CLOSE = False

DEFAULT_AUTO_FIELD = 'django.db.models.AutoField'
SESSION_COOKIE_NAME = 'tonesessionid'

ALLOW_ACCESS_ADMIN_URLS = cp.get('allow_access')
ADMIN_URLS_TOKEN = cp.get('admin_urls_token')

TONE_CLI_REPO = cp.get('tone_cli_repo', 'https://gitee.com/anolis/tone-cli')
GITEE_ACCESS_TOKEN = cp.get('gitee_access_token')
TONE_MATRIX_URL = cp.get('tone_matrix_url', 'https://gitee.com/api/v5/repos/anolis/tone-cli/contents/{path}?access_token=%s' % GITEE_ACCESS_TOKEN)
