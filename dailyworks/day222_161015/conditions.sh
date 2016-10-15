#!/bin/sh
pwd
ret=$?
if test ${ret} -eq 0
then
  echo "pwd 正常終了"
else
  echo "pwd 異常終了"
fi
