# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2017-12-19 19:37
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('discussion', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='thread',
            options={'ordering': ['last_edit']},
        ),
    ]
