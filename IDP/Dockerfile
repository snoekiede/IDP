FROM python:3.11-slim-bullseye
# For Debian-based images:
RUN apt-get update && apt-get install -y sqlite3 libsqlite3-dev

WORKDIR /app

COPY requirements.txt ./
RUN pip install -r requirements.txt

COPY . /app 
RUN ls /app
EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

