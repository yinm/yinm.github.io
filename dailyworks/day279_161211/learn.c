#include <stdio.h>
#include <string.h>

int main(void)
{
    char fname[256], name[256];

    printf("苗字を入力してください: ");
    scanf("%s", fname);

    printf("名前を入力してください: ");
    scanf("%s", name);

    strcat(fname, name);
    printf("フルネームは %s\n", fname);

    return 0;
}