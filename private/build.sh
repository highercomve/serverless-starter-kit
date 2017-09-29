#!/bin/bash
echo "Building application"
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
cp webpack.config.js dist/

echo "Go to dist and install dependencies"
echo "====================="
cd dist
pwd
yarn 