FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN curl -L -O https://artifacts.elastic.co/downloads/beats/filebeat/filebeat-6.6.1-linux-x86_64.tar.gz 
RUN tar -xzvf filebeat-6.6.1-linux-x86_64.tar.gz

COPY filebeat.yml /usr/share/filebeat/filebeat.yml

USER root
RUN chown root:filebeat /usr/share/filebeat/filebeat.yml
USER filebeat

EXPOSE 3000
CMD [ "npm" , "run", "start:prod" ]