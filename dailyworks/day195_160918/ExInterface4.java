public class ExInterface4 {
  void showBasic (ProfileInterface pi) {
    pi.showDate();
    pi.showName("Java太郎");
    pi.showAddress("東京都千代田区");
  }
  public static void main(String[] args) {
    ShowProfile sp = new ShowProfile();
    ExInterface4 object1 = new ExInterface4();
    object1.showBasic(sp);
  }

}
