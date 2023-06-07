from initial.docs.data import DOCS_LIST
from tone.models import HelpDoc, User


class HelpDocDataInitialize(object):
    """
    from initial.base_config.initialize import HelpDocDataInitialize
    HelpDocDataInitialize().initialize_help_data()
    """
    def initialize_help_data(self):
        self._clear_help_data()
        self._add_help_data()

    @staticmethod
    def _clear_help_data():
        HelpDoc.objects.all(query_scope='all').delete(really_delete=True)

    @staticmethod
    def _add_help_data():
        config_obj_list = [
            HelpDoc(
                title=item['title'],
                content=item['content'],
                creator=User.objects.first().id if User.objects.count() > 0 else 0,
                active=True,
                tags='docs',
                doc_type='help_doc',
                order_id=index + 1,
            )
            for index, item in enumerate(DOCS_LIST)
        ]
        HelpDoc.objects.bulk_create(config_obj_list)
