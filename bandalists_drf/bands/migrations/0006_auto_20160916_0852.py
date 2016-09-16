# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-09-16 08:52
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bands', '0005_bandimage'),
    ]

    operations = [
        migrations.AlterField(
            model_name='band',
            name='members',
            field=models.ManyToManyField(to=settings.AUTH_USER_MODEL),
        ),
    ]
