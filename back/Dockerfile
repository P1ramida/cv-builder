FROM python:3.9-slim

WORKDIR /app

COPY main/requirements.txt /app/requirements.txt

RUN pip install --no-cache-dir -r requirements.txt

COPY main /app/

EXPOSE 8000

CMD sh -c "python manage.py makemigrations && python manage.py migrate && exec python manage.py runserver 0.0.0.0:8000"
