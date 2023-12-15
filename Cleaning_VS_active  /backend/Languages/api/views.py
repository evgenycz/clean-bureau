from django.http import JsonResponse
from ..models import Languages, create_languages

def get_language_data(request):
    try:
        language_data = Languages.objects.all()
        if language_data:
            data = list(language_data.values())
            return JsonResponse(data, safe=False)
        else:
            return JsonResponse({'error': 'No data found'}, status=404)

    except Languages.DoesNotExist:
        return JsonResponse({'error': 'No data found'}, status=404)