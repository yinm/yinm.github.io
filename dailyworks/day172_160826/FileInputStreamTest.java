import java.io.*;

class FileInputStreamTest {
  public static void main(String[] args) {
    try {
      FileInputStream in = new FileInputStream("file_sjis.txt");
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
