import java.io.File;

public class Main {
  public static void main(String[] args) {
    File file = new File("./sub/test.txt");

    checkPermission(file);

    if (file.setReadOnly()) {
      System.out.println("ファイルを読み取り専用にしました");
    }
    else {
      System.out.println("読み取り専用に変更が失敗しました");
    }

    checkPermission(file);
  }

  private static void checkPermission(File file) {
    if (file.canRead()) {
      System.out.println("ファイルは読み込み可能です");
    }

    if (file.canWrite()) {
      System.out.println("ファイルは書き込み可能です");
    }
  }

}
