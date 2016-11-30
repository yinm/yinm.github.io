#include <stdio.h>

int main(void)
{
    int juice
        , milk
        , money
        , payment
        , change;

    double tax;

    juice = 198;
    milk = 138;
    money = 1000;
    tax = 1.05;

    payment = (int)((juice + milk * 2) * tax);
    change = money - payment;

    printf("%d円\n", change);

    return 0;
}