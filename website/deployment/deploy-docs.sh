#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

SOURCE_BRANCH="master"
TARGET_BRANCH="gh-pages"

# Pull requests and commits to other branches shouldn't try to deploy, just build to verify
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    echo "Skipping documentation deployment."
    exit 0
fi

# Collect Docs from package/*/docs/ directory
echo Collecting Docs from "package/*/docs/*.md"
for dir in $(ls packages/* -d);
    do 
        for doc in $(ls $dir/docs/*.md);
            do
                cp $doc $PWD/docs/$(basename $dir)-$(basename $doc)
                echo Copied $dir/docs/$(basename $doc) to docs/$(basename $dir)-$(basename $doc) 
            done
    done

# Deploy Docs
git config --global user.name "${GH_NAME}"
git config --global user.email "${GH_EMAIL}"
echo "machine github.com login ${GH_NAME} password ${GH_TOKEN}" > ~/.netrc
cd website && yarn install && GIT_USER="${GH_NAME}" yarn run publish-gh-pages