### GH INFO 
##### Information about how build local application 
##### For more details about the code and use options, see the README on the [./application/](https://github.com/andradedpg/gh-info/application)
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
> 3º Give the right permisions to exec.bash file 
```
$ chomd +x ./exec.sh
```
> 4º To consider the follow commands:
```
# Build the Docker stack of application
$ ./exec.sh build

# To see the logs
$ ./exec.sh logs

# To initiate the container cli application
$ ./exec.sh init
```

> Try the helper:
```
$ ghinfo -h

   ____ ___ _____ _   _ _   _ ____    ___ _   _ _____ ___     ____ _     ___ 
  / ___|_ _|_   _| | | | | | | __ )  |_ _| \ | |  ___/ _ \   / ___| |   |_ _|
 | |  _ | |  | | | |_| | | | |  _ \   | ||  \| | |_ | | | | | |   | |    | | 
 | |_| || |  | | |  _  | |_| | |_) |  | || |\  |  _|| |_| | | |___| |___ | | 
  \____|___| |_| |_| |_|\___/|____/  |___|_| \_|_|   \___/   \____|_____|___|
                                                                             
Usage: ghinfo [options]

CLI for fetching GitHub user info

Options:
  -V, --version           output the version number
  -l, --ls                List users from database
  -u, --username <value>  Fetch user info by username
  -h, --help              display help for command
```