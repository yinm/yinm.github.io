public class Main {
  public static void main(String[] args) {
    boolean end = false;
    boolean anschk;
    // 200歳未満の人しかいないと想定する。
    int randomAge = new java.util.Random().nextInt(200);

    while (end == false) {
      anschk = false;
      System.out.println("あなたはおそらく、" + randomAge + "歳ですね？");
      System.out.println("正しければ「yes」、年下ならば「less」、年上ならば「more」を入力してください");

      // 正しい回答がもらえるまでループする
      while (anschk == false) {
        String ans = new java.util.Scanner(System.in).nextLine();
        if (ans.equals("yes")) {
          anschk = true;
          end = true;
        }
        else if (ans.equals("less")) {
          anschk = true;
          randomAge = new java.util.Random().nextInt(randomAge);
        }
        // とりあえず、10歳足してみる。
        else if (ans.equals("more")) {
          anschk = true;
          randomAge += 10;
        }
        else {
          System.out.println("回答に誤りがあります。再度入力してください。");
        }
      }
    }

  }
}
