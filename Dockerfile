FROM python:3.9-slim
WORKDIR /QdApiFront
COPY . /QdApiFront
EXPOSE 8000
CMD ["python", "-m", "http.server", "8000"]
