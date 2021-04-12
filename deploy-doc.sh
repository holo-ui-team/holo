npm run docs:build

cd ./docs/dist

git init

git add -A

git commit -m "Release documentation."

git push -f https://github.com/holo-ui-team/holo-doc.git master:gh-pages
