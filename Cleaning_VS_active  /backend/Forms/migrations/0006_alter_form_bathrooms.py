# Generated by Django 4.2.7 on 2023-11-20 19:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Forms', '0005_rename_typ_building_form_type_building'),
    ]

    operations = [
        migrations.AlterField(
            model_name='form',
            name='bathrooms',
            field=models.CharField(default='', max_length=50),
        ),
    ]
