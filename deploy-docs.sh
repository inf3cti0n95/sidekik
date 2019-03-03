#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

SOURCE_BRANCH="master"
TARGET_BRANCH="gh-pages"

# Pull requests and commits to other branches shouldn't try to deploy, just build to verify
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    echo "Skipping deploy."
    exit 0
fi

# Deploy Docs
git config --global user.name "${GH_NAME}"
git config --global user.email "${GH_EMAIL}"
echo "machine github.com login ${GH_NAME} password ${GH_TOKEN}" > ~/.netrc
cd website && yarn install && GIT_USER="${GH_NAME}" yarn run publish-gh-pages