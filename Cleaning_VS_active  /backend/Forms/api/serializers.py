from rest_framework.serializers import ModelSerializer
from ..models import Form

class FormSerializer(ModelSerializer):
    class Meta:
        model = Form
        fields = ('id',
        'name',
        'surname',
        'phone',
        'user_mail',
        'type_building', 'rooms', 'area_rooms', 'bathrooms', 'typ_of_cleaning',
        'services',
        'comments',
        'lastCleaning',
        'time',
        'price',
        )

