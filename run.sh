#!/usr/bin/env bash
hug -f main.py &
nginx -c /app/DarkTech/nginx.conf &