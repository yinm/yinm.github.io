class runnableShowFurigana implements Runnable {
  public void run() {
    for (int i = 1; i <= 5; i++) {
      System.out.println("ふりがな： javaたろう");
      try {
        Thread.sleep(1000);
      }
      catch (InterruptedException e) {
        // 何もしない
      }
    }
  }

}
