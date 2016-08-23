public class Knight {
  private String name;

  Knight(String name) {
    this.name = name;
  }

  void attack(Enemy e) {
    System.out.println(this.name + "の攻撃！");
    int damege = 30;
    e.hp -= damege;
    System.out.println(e.NAME + "に" + damege +  "のダメージ");

    if (e.hp < 0) {
      System.out.println(e.NAME + "を倒した！");
      System.out.println(this.name + "は、" + e.EXP + "の経験値を獲得した！");
    }
  }
}
