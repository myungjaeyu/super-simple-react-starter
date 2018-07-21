# super-simple-react-starter

> A react starter kit with SSR.

<img width="600" src="demo.png"/>

## Demo

https://super-simple-react-starter-gdfyhflfqk.now.sh

## Installation

```
npm install -g create-razzle-app

git clone https://github.com/myungjaeyu/super-simple-react-starter.git

cd super-simple-react-starter

npm install

npm start
```

## Usage

1. production build `npm run build`

2. open the local server with the production file `npm run start:prod`

3. running tests `npm run test`

## Deploy in Docker Container

```
$ docker-compose build && docker-compose up
```

## Deploy in Serverless AWS Lambda

```
$ serverless deploy
```

## Features

- Server-Side Rendering
- Razzle
- Sass
- React-router-dom v4+
- Redux-observable
- Preload / prefetch resource
- Code splitting
- Latest packages
- semantic-ui-react
- styled-components for SSR
- SEO support via react-helmet

Copyright © 2018 Liang Wang, Myungjae Yu

___

### Requirements

> | Vendor                | URL                                                   |
> |------------------------|------------------------------------------------------|
> | Razzle                 | https://github.com/jaredpalmer/razzle                |


## License

This project is licensed under the [MIT license](LICENSE).