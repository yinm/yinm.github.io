public class Main {
  public static void main(String[] args) {
    Knight k = new Knight("勇者");
    Enemy e = new Enemy();

    System.out.println(e.NAME + "が現れた！");
    k.attack(e);
    k.attack(e);
  }
}
