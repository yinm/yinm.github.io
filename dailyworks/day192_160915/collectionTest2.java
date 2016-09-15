import java.util.ArrayList;

public class collectionTest2 {
  public static void main(String[] args) {
    ArrayList<String> array = new ArrayList<String>();

    array.add("日本");
    array.add("ブラジル");
    array.add("イングランド");
    array.add("ポルトガル");
    array.add("フランス");

    System.out.println("登録データ数：" + array.size());

    for (int i = 0; i < array.size(); i++) {
      String country = array.get(i);
      System.out.println(country);
    }
  }
}
