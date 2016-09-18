public class ExInterface3 implements HelloWorld {
  public void sayHello(int x) {
    for (int i = 0; i < x; i++) {
      System.out.println("Hello!");
    }
  }

  public static void main(String[] args) {
    System.out.println(COUNTRY);
    ExInterface3 object1 = new ExInterface3();
    object1.sayHello(5);
  }
}
