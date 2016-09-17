# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-09-17 15:17
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('bands', '0006_auto_20160916_0852'),
        ('notifications', '0005_auto_20160917_1501'),
    ]

    operations = [
        migrations.AddField(
            model_name='notification',
            name='dashboard',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='bands.Band'),
        ),
    ]
