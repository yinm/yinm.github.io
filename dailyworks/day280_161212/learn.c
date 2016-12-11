#include <stdio.h>

int main(void)
{
    char str[256] = "DRAGON";
    scanf("%s", &str[6]);
    printf("%s\n", str);
    return 0;
}