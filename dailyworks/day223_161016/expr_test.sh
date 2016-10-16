#!/bin/sh
a=`expr 5 + 3`
b=`expr 5 - 3`
ab=`expr $a + $b`
c=`expr 5 \* 3`
d=`expr 5 / 3`
e=`expr 5 % 3`
echo $0
echo "a=$a"
echo "b=$b"
echo "ab=$ab"
echo "c=$c"
echo "d=$d"
echo "e=$e"
