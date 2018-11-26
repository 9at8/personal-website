#!/bin/bash

set -e

CSC_USER_AT_SERVER="${CSC_USER}@${CSC_SERVER}"

openssl aes-256-cbc -K $encrypted_8434cfec6733_key -iv $encrypted_8434cfec6733_iv -in ./config/deploy/csc-key.enc -out ./csc-key -d
eval "$(ssh-agent -s)"
chmod 600 ./csc-key
echo -e "Host ${CSC_SERVER}\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config
ssh-add ./csc-key

ssh "${CSC_USER_AT_SERVER}" "cd ~/personal-website && git pull -f && ${CSC_YARN} && rm -rf ~/build"
scp -r ./build "${CSC_USER_AT_SERVER}:${CSC_HOME}"
ssh "${CSC_USER_AT_SERVER}" "rm -rf ~/personal-website/build ; mv ~/build ~/personal-website/build"

sed -e "s/::PORT::/${PORT}/g" ./config/deploy/.htaccess.template > ./.htaccess
scp ./.htaccess "${CSC_USER_AT_SERVER}:${CSC_HOME}/www"

