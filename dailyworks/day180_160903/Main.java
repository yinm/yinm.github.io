public class Main {
  public static void main(String[] args) {
    String str = "りんご,レモン,すいか,ぶどう";
    String[] fruit = str.split(",", 0);

    for (int i = 0; i < fruit.length; i++) {
      System.out.println(i + "番目の要素 = :" + fruit[i]);
    }

  }
}
