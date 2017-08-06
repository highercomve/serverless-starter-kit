#!/bin/bash

ENVIRONMENTS_TEMPLATE="./private/templates/environments.json"
TEST_ENV_FILE="./environments/test.json"
DEV_ENV_FILE="./environments/development.json"
PROD_ENV_FILE="./environments/production.json"
STAGE_ENV_FILE="./environments/stage.json"

if [ ! -f "$TEST_ENV_FILE" ]; then
    cp "$ENVIRONMENTS_TEMPLATE" "$TEST_ENV_FILE"
fi
if [ ! -f "$DEV_ENV_FILE" ]; then
    cp "$ENVIRONMENTS_TEMPLATE" "$DEV_ENV_FILE"
fi
if [ ! -f "$PROD_ENV_FILE" ]; then
    cp "$ENVIRONMENTS_TEMPLATE" "$PROD_ENV_FILE"
fi
if [ ! -f "$STAGE_ENV_FILE" ]; then
    cp "$ENVIRONMENTS_TEMPLATE" "$STAGE_ENV_FILE"
fi
