#!/bin/bash
echo "Deploying application"
echo "====================="

echo "Remove old dist"
echo "====================="
rm -rf dist

echo "Creating dist"
echo "====================="
mkdir dist
yarn babelify

echo "Move necessary files to dist"
echo "====================="
cp handler.js dist/
cp load_env_vars.js dist/
cp package.json dist/
cp serverless.yml dist/
cp yarn.lock dist/

echo "Go to dist and install dependencies"
echo "====================="
cd dist
pwd
yarn 

echo "Start deploying to lambda"
echo "====================="
if [[ $@  ]]
then
    echo "deploying on this stages: $@"
    for env in "$@"
    do
        yarn sls -- deploy --stage "$env" 
    done
else
    echo "deploying on this stages: dev stage production"
    yarn sls -- deploy --stage dev
    yarn sls -- deploy --stage stage
    yarn sls -- deploy --stage production
fi