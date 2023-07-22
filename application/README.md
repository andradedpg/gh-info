### GH INFO  
##### Fetch information about a given GitHUB user (cli) 
---
<dl>
    <dt>Pre-requesites (Running on local machine)</dt>
    <dd>🔄 Git commad line (git)</dd>
    <dd>Node >=18 (version)</dd>
    <dd>Postgres >=14.3 (version) </dd>
</dl>
---
##### Step by step (build and start app)
> 1º Clone this repository and go to the main path 
```
$ git glone https://github.com/andradedpg/gh-info gh-info && cd ./gh-info/application 
```
> 2º Copy from .env.example to .env and change sensitive values
```
$ cp .env.example .env 
```
> 3º Install dependencies
```
$ yarn install
```
> 4º Start environments:
```
# DEV Environment
$ yarn start
# Build Environment
$ yarn build
```

###### Commands available: 
> See all commands
```
$ node ./dist/index.js -h 
```

> Fecth user by username (If the user not exists locally on database, GH Api will be requested)
```
$ node ./dist/index.js --username example 
```

> List local users (on database)
```
$ node ./dist/index.js --ls 
```