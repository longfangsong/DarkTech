FROM nginx:1.14-alpine
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.shu.edu.cn/g' /etc/apk/repositories
RUN apk update
RUN apk add git python3 nginx
RUN mkdir /app
WORKDIR /app
RUN git clone https://github.com/longfangsong/DarkTech.git
WORKDIR /app/DarkTech
RUN pip3 install -r requirements.txt -i https://mirrors.shu.edu.cn/pypi/web/simple
RUN cp ./nginx.conf /etc/nginx/nginx.conf
RUN mkdir /www
RUN mkdir /www/html
RUN cp -r ./front-end/dist/front-end /www/html/front-end
EXPOSE 80

CMD "hug -f /app/DarkTech/main.py && nginx"
