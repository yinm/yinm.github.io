public class Main {
  public static void main(String[] args) {
    String str = "ABCDE";

    System.out.println(str.substring(0, 3));
    System.out.println(str.substring(1, 3));
    // 3文字目（インデックスの2）から、最後までを取り出す
    System.out.println(str.substring(2));

    System.out.println(str.charAt(3));
  }
}
