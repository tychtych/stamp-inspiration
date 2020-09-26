#Thesis Code Challenge

## Design changes
* I removed hamburger menu from desktop view, as it usually used to hide menu items on tablet or mobile views.

## Live version
Netlify is used for deployment from master branch. Site: https://stamp-inspirations.netlify.app

## Bundler
Parcel bundler is used for:
* asset minification (css, html)
* adding hash to assets, so that they are properly cached by browser
* bundling all css files into single stylesheet
* development server with hot-reload

### How to run locally
* npm install - install parcel locally
* npm run dev - run development server
* npm run build - build production version and put in dist folder
