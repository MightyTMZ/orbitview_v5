# Use an official Python image as the base
FROM python:3.11

# Set environment variables
ENV PYTHONUNBUFFERED=1 \
    OLLAMA_MODELS_DIR=/root/.ollama/models

# Install system dependencies
RUN apt update && apt install -y curl

# Install Ollama
RUN curl -fsSL https://ollama.com/install.sh | sh

# Pull the model so it's available in the container
RUN ollama pull llama3.2

# Create app directory
WORKDIR /app

# Copy Django project files
COPY . .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose ports (Django and Ollama)
EXPOSE 8000 11434

# Start Ollama in the background and run Django
CMD ollama serve & python manage.py runserver 0.0.0.0:8000
