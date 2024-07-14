FROM nginx:alpine
COPY . /QdApiFront
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
