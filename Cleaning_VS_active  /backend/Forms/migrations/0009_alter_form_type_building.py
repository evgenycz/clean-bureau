# Generated by Django 4.2.7 on 2023-11-22 11:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Forms', '0008_alter_form_type_building'),
    ]

    operations = [
        migrations.AlterField(
            model_name='form',
            name='type_building',
            field=models.CharField(blank=True, default='', max_length=50),
        ),
    ]
