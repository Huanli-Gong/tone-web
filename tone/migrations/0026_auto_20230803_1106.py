# Generated by Django 3.2.5 on 2023-08-03 11:06

from django.db import migrations, models
import django_extensions.db.fields.json


class Migration(migrations.Migration):

    dependencies = [
        ('tone', '0025_auto_20230413_1521'),
    ]

    operations = [
        migrations.AddField(
            model_name='testjobcase',
            name='timeout',
            field=models.IntegerField(default=0, help_text='超时时间'),
        ),
        migrations.AddField(
            model_name='testtmplcase',
            name='timeout',
            field=models.IntegerField(default=0, help_text='超时时间'),
        ),
        migrations.AddField(
            model_name='reportdetail',
            name='template_detail',
            field=django_extensions.db.fields.json.JSONField(default=dict),
        ),
        migrations.AddField(
            model_name='reportitem',
            name='desc',
            field=models.TextField(help_text='测试项说明', null=True),
        ),
    ]
