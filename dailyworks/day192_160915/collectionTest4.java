import java.util.ArrayList;

public class collectionTest4 {
  public static void main(String[] args) {
    ArrayList<String> array = new ArrayList<String>();

    array.add("東京");
    array.add("大阪");
    array.add("東京");
    array.add("千葉");

    for (int i = 0; i < array.size(); i++) {
      String country = array.get(i);
      System.out.println(country);
    }

    String word = "東京";
    int first = array.indexOf(word);

    System.out.println(word + "について検索します");

    if (first != -1) {
      System.out.println("最初のインデックス番号は " + first);
    }

    int last = array.lastIndexOf("東京");
    if (last != -1) {
      System.out.println("最後のインデックス番号は " + last);
    }

  }
}
