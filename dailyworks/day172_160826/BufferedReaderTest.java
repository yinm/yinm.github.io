import java.io.*;

class BufferedReaderTest {
  public static void main(String[] args) {
    try {
      FileReader in = new FileReader("file_utf8.txt");
      BufferedReader br = new BufferedReader(in);
      String line;
      while ((line = br.readLine()) != null) {
        System.out.println(line);
      }
      br.close();
      in.close();
    } catch (IOException e) {
      System.out.println(e);
    }
  }
}
