#!/usr/bin/env sh

# 发生错误时终止
set -e

# 构建
npm run build

# 进入构建文件夹
cd dist
echo > .nojekyll
# 如果你要部署到自定义域名
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# 如果你要部署在 https://williamshuo3.github.io
# git push -f git@github.com:williamshuo3/williamshuo3.github.io.git main

# 如果你要部署在 https://williamshuo3.github.io/vite-work
git push -f git@github.com:williamshuo3/vite-work.git master:gh-pages

cd -