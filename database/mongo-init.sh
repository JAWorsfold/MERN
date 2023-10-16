#!/bin/bash
set -e

mongosh <<EOF
db = db.getSiblingDB('${MERN_APP_DB_NAME}')
db.createUser({
  user: '${MERN_APP_DB_USER}',
  pwd: '${MERN_APP_DB_PASSWORD}',
  roles: [{ role: 'readWrite', db: '${MERN_APP_DB_NAME}' }],
})
EOF
