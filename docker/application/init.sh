#!/bin/sh
eval $(grep '^DATABASE_URL' /usr/src/app/dist/.env) npm run migrate up >> /usr/src/app/dist/migrate.log  

supervisord -c /supervisor/supervisor.conf