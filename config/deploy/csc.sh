#!/bin/bash

set -e

openssl aes-256-cbc -K $encrypted_8434cfec6733_key -iv $encrypted_8434cfec6733_iv -in ./config/deploy/csc-key.enc -out ./csc-key -d
eval "$(ssh-agent -s)"
chmod 600 ./csc-key
echo -e "Host ${CSC_SERVER}\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config
ssh-add ./csc-key

ssh "${CSC_USER}@${CSC_SERVER}" "cd ~/personal-website && git pull -f && ${CSC_YARN} && PORT=${PORT} ${CSC_YARN} build"

sed -e "s/::PORT::/${PORT}/g" ./config/deploy/.htaccess.template > ./.htaccess
scp ./.htaccess "${CSC_USER}@${CSC_SERVER}:${CSC_HOME}/www"

