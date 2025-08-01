#!/bin/bash
set -e

# Build the project with hashed assets
echo "VITE_API_URL=https://winove.com.br/api" > .env
npm run build

if [ -z "$DEPLOY_USER" ] || [ -z "$DEPLOY_HOST" ] || [ -z "$DEPLOY_PATH" ]; then
  echo "DEPLOY_USER, DEPLOY_HOST and DEPLOY_PATH environment variables must be set" >&2
  exit 1
fi

# Copy built files to the remote server
scp -r dist/* "${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}"

echo "Deployment complete"
