import java.io.*;

class FileReaderTest {
  public static void main(String[] args) {
    try {
      FileReader in = new FileReader("file_utf8.txt");
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
