import java.net.*;

public class JavaDecode {
  public static void main(String[] args) throws Exception {
    // 文字化け
    String arg = "%82Q";
    System.out.println(URLDecoder.decode(arg, "Shift_JIS"));

    // 正常に変換
    arg = "%82%51";
    System.out.println(URLDecoder.decode(arg, "Shift_JIS"));
  }
}
