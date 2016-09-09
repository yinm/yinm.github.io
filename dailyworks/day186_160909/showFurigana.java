class showFurigana extends Thread {
  public void run() {
    for (int i = 1; i <= 5; i++) {
      System.out.println("ふりがな： javaたろう");
      try {
        sleep(1000);
      }
      catch (InterruptedException e) {
        // 何もしない
      }
    }
  }

}
