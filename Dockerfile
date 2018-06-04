FROM nginx:1.14-alpine
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.shu.edu.cn/g' /etc/apk/repositories && apk update && apk add git python3 nginx
RUN mkdir /app
WORKDIR /app
RUN git clone https://github.com/longfangsong/DarkTech.git
WORKDIR /app/DarkTech
RUN pip3 install -r requirements.txt -i https://mirrors.shu.edu.cn/pypi/web/simple
RUN cp ./nginx.conf /etc/nginx/nginx.conf && mkdir /www && mkdir /www/html && mkdir /www/html/front-end && cp -r ./front-end/dist/front-end /www/html/front-end
RUN mkdir /run/nginx && touch /run/nginx/nginx.pid
EXPOSE 80
RUN chmod +x ./run.sh
CMD nohup sh -c ./run.sh
