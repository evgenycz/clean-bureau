# Generated by Django 4.2.7 on 2023-11-26 22:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Forms', '0015_alter_form_services'),
    ]

    operations = [
        migrations.AlterField(
            model_name='form',
            name='services',
            field=models.CharField(default='', max_length=50),
        ),
    ]
