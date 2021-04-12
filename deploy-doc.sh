npm run docs:build

cd ./docs/.vuepress/dist

git init

git add -A

git commit -m "Release documentation."

git push -f https://github.com/holo-ui-team/holo.git master:gh-pages
