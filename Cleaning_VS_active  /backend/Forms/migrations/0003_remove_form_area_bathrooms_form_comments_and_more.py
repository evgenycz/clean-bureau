# Generated by Django 4.2.7 on 2023-11-18 15:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Forms', '0002_alter_form_area_bathrooms_alter_form_area_rooms_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='form',
            name='area_bathrooms',
        ),
        migrations.AddField(
            model_name='form',
            name='comments',
            field=models.TextField(default='', max_length=200),
        ),
        migrations.AddField(
            model_name='form',
            name='lastCleaning',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AddField(
            model_name='form',
            name='name',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AddField(
            model_name='form',
            name='price',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AddField(
            model_name='form',
            name='surname',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AddField(
            model_name='form',
            name='user_mail',
            field=models.EmailField(default='default@example.com', max_length=254),
        ),
    ]