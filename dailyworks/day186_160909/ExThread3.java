class ExThread3 {
  public static void main(String[] args) {
    runnableShowName sn = new runnableShowName();
    runnableShowFurigana sf = new runnableShowFurigana();

    Thread thread1 = new Thread(sn);
    Thread thread2 = new Thread(sf);

    thread1.start();
    thread2.start();
  }

}
