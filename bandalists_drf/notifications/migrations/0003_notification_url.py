# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-09-17 14:36
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notifications', '0002_auto_20160916_1802'),
    ]

    operations = [
        migrations.AddField(
            model_name='notification',
            name='url',
            field=models.URLField(default='', max_length=255),
            preserve_default=False,
        ),
    ]
