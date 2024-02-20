#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# 如果你要部署在 https://williamshuo3.github.io
# git push -f git@github.com:williamshuo3/williamshuo3.github.io.git main

# 如果你要部署在 https://williamshuo3.github.io/vite-work
git push -f git@github.com:williamshuo3/vite-work.git main:gh-pages

cd -