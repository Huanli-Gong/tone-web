from tone.settings import redis_settings
Q_CLUSTER = {
    'name': 'project_name',
    'workers': 4,
    'recycle': 500,
    'timeout': 60,
    'compress': True,
    'cpu_affinity': 1,
    'save_limit': 250,
    'queue_limit': 500,
    'label': 'Django Q',
    'redis': {
        'host': redis_settings.REDIS_HOST,
        'port': redis_settings.REDIS_PORT,
        'db': redis_settings.REDIS_CACHE_DB,
        'username': redis_settings.REDIS_USERNAME,
        'password': redis_settings.REDIS_PASSWORD
    }
}