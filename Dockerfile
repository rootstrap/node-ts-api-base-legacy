FROM node:10.16.0-alpine
RUN mkdir /code
WORKDIR /code
COPY . /code/
