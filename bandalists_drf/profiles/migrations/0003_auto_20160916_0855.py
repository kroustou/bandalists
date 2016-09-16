# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-09-16 08:55
from __future__ import unicode_literals

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0002_invitation'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='invitation',
            name='id',
        ),
        migrations.AlterField(
            model_name='invitation',
            name='token',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False),
        ),
    ]
