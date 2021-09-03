FROM hoosin/alpine-nginx-nodejs
WORKDIR /app
COPY package.json /app
RUN cd /app && npm install --python=python2.7 && npm install --registry=http://registry.npm.taobao.org
COPY . /app
RUN cd /app && npm run build:production
RUN cp -r /app/dist /etc/nginx/conf.d/dist
RUN cp /app/nginx.conf /etc/nginx
RUN rm /etc/nginx/conf.d/default.conf
RUN cd / && rm -r /app
