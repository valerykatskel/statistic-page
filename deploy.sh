set -e

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:valerykatskel/statistic-page.git master:gh-pages

cd -