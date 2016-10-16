#!/bin/sh
arg_chk()
{
  if test $# -eq 2
  then
    return 0
  else
    return 1
  fi
}

arg_chk $@
ret=$?
echo "引数チェック結果=${ret}"
