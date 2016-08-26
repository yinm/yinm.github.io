import java.io.*;

class InputStreamReaderTest {
  public static void main(String[] args) {
    try {
      FileInputStream is = new FileInputStream("file_sjis.txt");
      InputStreamReader in = new InputStreamReader(is, "SJIS");

      int ch;
      while ((ch = in.read()) != -1) {
        System.out.print(Integer.toHexString(ch) + " ");
      }
      in.close();
    } catch (IOException e) {
      System.out.println(e);
    }
  }
}
