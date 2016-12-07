#include <stdio.h>

int olympicOpen(int year);

int main(void)
{
    int year, hold;

    printf("西暦を入力してください\n");
    scanf("%d", &year);
    hold = olympicOpen(year);

    switch (hold) {
    case 0:
        printf("オリンピックは開かれません\n");
        break;
    case 1:
        printf("夏季五輪\n");
         break;
    case 2:
        printf("冬季五輪\n");
        break;
    };

    return 0;
}

int olympicOpen(int year)
{
    if (year % 2 == 0) {
        if (year % 4 == 0) {
            return 1;
        } else {
            return 2;
        }
    } else {
        return 0;
    }
}