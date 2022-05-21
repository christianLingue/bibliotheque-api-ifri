npm run build
heroku git:clone -a library-tp-api
rm -rf library-tp-api/*
cp -R dist library-tp-api
git add -f .
git commit -f "deploying to heroku"
git push heroku main