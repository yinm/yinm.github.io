#!/bin/sh
a=0
while [ $a -ne 10 ]
do
  a=`expr $a + 1`
  echo "${a} 回目の処理"
done
