# Generated by Django 4.2.7 on 2023-11-23 11:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Forms', '0009_alter_form_type_building'),
    ]

    operations = [
        migrations.AlterField(
            model_name='form',
            name='comments',
            field=models.TextField(blank=True, default='', max_length=200),
        ),
    ]