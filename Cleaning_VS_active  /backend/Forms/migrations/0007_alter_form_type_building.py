# Generated by Django 4.2.7 on 2023-11-22 11:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Forms', '0006_alter_form_bathrooms'),
    ]

    operations = [
        migrations.AlterField(
            model_name='form',
            name='type_building',
            field=models.CharField(default='', max_length=50),
        ),
    ]