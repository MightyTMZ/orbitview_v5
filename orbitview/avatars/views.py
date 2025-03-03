from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import requests
# import ollama


@csrf_exempt
def chat(request):
    if request.method == "POST":
        try:
            # Parse JSON request body
            data = json.loads(request.body)
            prompt = data.get("prompt")

            if not prompt:
                return JsonResponse({"message": "Message could not be read by the model"}, status=400)

            # Call Ollama model API
            response = requests.post(
                "http://localhost:11434/api/generate",
                json={"model": "llama3.2", "prompt": prompt, "stream": False}
            )

            if response.status_code == 200:
                response_data = response.json()
                return JsonResponse({"message": "Successful", "response": response_data.get("response", "")})
            else:
                return JsonResponse({"message": "Error from model API", "error": response.text}, status=response.status_code)

        except json.JSONDecodeError:
            return JsonResponse({"message": "Invalid JSON format"}, status=400)
        except requests.RequestException as e:
            return JsonResponse({"message": "Request error", "error": str(e)}, status=500)

    return JsonResponse({"message": "Invalid request method"}, status=405)
