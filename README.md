# vue-boilerplate

A VueJs 2 project with:
+ Vue Router
+ Vuex
+ Sass
+ Jest
+ PWA
+ Eslint

Plugins
+ i18n
+ Font Awesome 5
+ Mobile Detect
+ Heroku

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Heroku build
1. ```yarn add express serve-static``` (if necessary)
2. ```brew tap heroku/brew && brew install heroku``` (alternatively, download installable from Heroku site)
3. ```heroku login``` (and complete login)
4. create app with an <app-name> in Heroku
5. ```heroku git:remote -a <app-name>```
6. ```yarn build && yarn start```
7. ```git add .```
8. ```git commit -m <message>```
9. ```git push heroku master```
