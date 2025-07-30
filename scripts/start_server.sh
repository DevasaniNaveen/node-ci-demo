#!/bin/bash
cd /home/ubuntu/node-app
nohup npm start > app.log 2>&1 &
