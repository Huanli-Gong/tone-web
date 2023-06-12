# Generated by Django 3.2.5 on 2023-04-13 15:21

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('tone', '0024_auto_20230406_1136'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='product_version',
            field=models.CharField(blank=True, db_index=True, help_text='产品版本', max_length=512, null=True),
        ),
        migrations.AlterField(
            model_name='report',
            name='product_version',
            field=models.CharField(blank=True, help_text='产品版本', max_length=512, null=True),
        ),
    ]
