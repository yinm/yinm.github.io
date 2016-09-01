import java.io.File;

public class Main {
  public static void main(String[] args) {
    File dailyworksDirectory = new File("../");

    String filelist[] = dailyworksDirectory.list();
    for (int i = 0; i < filelist.length; i++) {
      System.out.println(filelist[i]);
    }
  }
}
