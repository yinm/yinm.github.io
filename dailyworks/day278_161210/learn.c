#include <stdio.h>

int main(void)
{
    int inputNum[10];
    int i;

    for (i = 0; i < 10; i++) {
        printf("%d 番目の数値を入力してください: ", i);
        scanf("%d", &inputNum[i]);
    }

    for (i = 9; i >= 0; i--) {
        printf("%d\n", inputNum[i]);
    }

    return 0;
}