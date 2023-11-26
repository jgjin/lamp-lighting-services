#!zsh

DATADIR="/tmp/pgsql-$(openssl rand -hex 16)"

initdb $DATADIR

postgres -D $DATADIR
