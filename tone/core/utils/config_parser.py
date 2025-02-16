import os
import logging


class ConfigParser(object):
    def __init__(self, file_name=None):
        self._file_name = file_name
        self.property_dic = {}
        self.boolean_mapping = {
            '1': True, 'yes': True, 'true': True, 'on': True,
            '0': False, 'no': False, 'false': False, 'off': False
        }

    def read(self, encoding='utf-8'):
        try:
            if not self._file_name:
                self.property_dic = os.environ
            else:
                content = open(self._file_name, 'r', encoding=encoding).read()
                for line in content.splitlines():
                    if not line.strip():
                        continue
                    str_list = line.split('=', 1)
                    if len(str_list) < 2:
                        continue
                    self.property_dic[str_list[0].strip()] = str_list[1].strip()
        except Exception as error:
            logging.error(str(error))
            self.property_dic = os.environ
        return self.property_dic

    def get(self, key, default_value=None, read_now=False):
        if read_now:
            self.read()
        if not self._get(str, key):
            return default_value
        return self._get(str, key)

    def getboolean(self, key, read_now=False):
        if read_now:
            self.read()
        value = self.property_dic.get(key)
        if value.lower() not in self.boolean_mapping:
            return False
        return self.boolean_mapping[value.lower()]

    def _get(self, value_type, key):
        if self.property_dic.get(key):
            return value_type(self.property_dic.get(key))

    def getint(self, key):
        return self._get(int, key)

    def getfloat(self, key):
        return self._get(float, key)


if os.environ.get('env', 'local') == 'local':
    cp = ConfigParser(file_name='app.properties')
else:
    cp = ConfigParser()
cp.read()


def get_config_from_db(key, default=''):
    from tone.models import BaseConfig
    config_obj = BaseConfig.objects.filter(config_type='sys', config_key=key)
    if not config_obj.exists():
        return default
    return config_obj.first().config_value


def get_chinese_stopwords():
    try:
        doc_file1 = 'static/config/chinese_stopwords.txt'
        with open(doc_file1, 'r', encoding='utf-8') as f:
            stopword_set = set([line.strip() for line in f])
    except Exception:
        stopword_set = set()
    return stopword_set


stopwords = get_chinese_stopwords()
