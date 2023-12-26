#!/bin/bash

CURRENT_VERSION=$(jq -r '.version' package.json)
NEW_VERSION=$(node -p "require('semver').inc('$CURRENT_VERSION', 'patch')")
jq ".version = \"$NEW_VERSION\"" package.json > temp.json && mv temp.json package.json
echo "Updated version to $NEW_VERSION"
