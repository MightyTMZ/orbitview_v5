from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import ollama


@csrf_exempt
def chat(request):
    if request.method == "POST":
        try:
            # Parse JSON request body
            data = json.loads(request.body)
            prompt = data.get("prompt")

            if not prompt:
                return JsonResponse({"message": "Message could not be read by the model"}, status=400)

            # Call Ollama model
            response = ollama.generate(
                model="llama3.2",
                prompt=prompt
            )

            return JsonResponse({"message": "Successful", "response": response.get("response", "")})

        except json.JSONDecodeError:
            return JsonResponse({"message": "Invalid JSON format"}, status=400)

    return JsonResponse({"message": "Invalid request method"}, status=405)