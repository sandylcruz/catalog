#!/bin/bash
set -e

echo "About to perform eslint run"

cd ./app/javascript/src

yarn eslint

echo "ESLint was a success"