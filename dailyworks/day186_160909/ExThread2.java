class ExThread2 {
  public static void main(String[] args) {
    showName thread1 = new showName();
    showFurigana thread2 = new showFurigana();

    thread1.start();
    thread2.start();
    
  }
}
