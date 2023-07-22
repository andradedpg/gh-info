### GH INFO 
##### Information about how build local application 
##### For more details about the code and use options, see the README on the [./src/](https://github.com/andradedpg/gh-info/src)
---

<dl>
    <dt>Pre-requesites (Running on local machine)</dt>
    <dd>🔄 Git commad line (git)</dd>
    <dd>🐳 Docker engine +20 (version) </dd>
    <dd>💻 Bash compatible terminal</dd>
</dl>

---
##### Step by step (build and start app)
> 1º Clone this repository and go to the main path 
```
$ git glone https://github.com/andradedpg/gh-info gh-info && cd ./gh-info 
```
> 2º Copy from .env.example to .env and change sensitive values
```
$ cp .env.example .env 
```
> 3º Build the application
```
$ docker compose -f compose.yaml up -d --build  
```
> 4º Down services
```
$ docker compose -f compose.yaml down  
```