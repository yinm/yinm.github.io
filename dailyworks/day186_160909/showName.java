class showName extends Thread {
  public void run() {
    for (int i = 1; i <= 5; i++) {
      System.out.println("名前： Java太郎");
      try {
        sleep(1000);
      }
      catch (InterruptedException e) {
        // 何もしない
      }
    }
  }

}
