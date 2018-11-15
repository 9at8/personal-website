#!/bin/bash

set -e

openssl aes-256-cbc -K $encrypted_8434cfec6733_key -iv $encrypted_8434cfec6733_iv -in ./config/deploy/csc-key.enc -out ./csc-key -d
eval "$(ssh-agent -s)"
chmod 600 ./csc-key
echo -e "Host hfcs.csclub.uwaterloo.ca\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config
ssh-add ./csc-key

ssh a3thakra@hfcs.csclub.uwaterloo.ca "cd ~/personal-website && git pull -f && PORT=$PORT yarn build"

sed -e "s/::PORT::/$PORT/g" ./config/deploy/.htaccess.template > ./.htaccess
scp ./.htaccess a3thakra@hfcs.csclub.uwaterloo.ca:/users/a3thakra/www

