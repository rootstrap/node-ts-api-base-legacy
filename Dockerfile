FROM keymetrics/pm2:latest-alpine
# Bundle APP files
RUN mkdir /code
WORKDIR /code
COPY . /code/
# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
