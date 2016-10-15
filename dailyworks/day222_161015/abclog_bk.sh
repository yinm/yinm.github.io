#!/bin/sh
cp -p abc.log abc.log.bak
gzip abc.log.bak
cat /dev/null > abc.log
