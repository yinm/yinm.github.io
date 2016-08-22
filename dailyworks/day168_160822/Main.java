import java.util.*;
import java.math.*;

public class Main {
  public static void main(String[] args) {
    System.out.println("あなたの身長(cm)を入力してください。");
    double height_cm = new Scanner(System.in).nextDouble();
    System.out.println("あなたの体重(kg)を入力してください。");
    double weight = new Scanner(System.in).nextDouble();

    // BMI計算用に、身長をcm → mに変換する
    double height_m = height_cm / 100;
    double calcBmi = weight / (height_m * height_m);
    // 小数第3位で、四捨五入する。
    BigDecimal bmi = new BigDecimal(calcBmi).setScale(2, BigDecimal.ROUND_HALF_UP);
    System.out.println("あなたのBMIは、" + bmi + "です。");
  }
}
