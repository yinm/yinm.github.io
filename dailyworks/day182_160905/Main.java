import java.util.HashMap;

public class Main {
  public static void main(String[] args) {
    HashMap<String, String> map = new HashMap<String, String>();

    map.put("apple", "りんご");
    map.put("grapes", "ぶどう");

    if (map.containsKey("apple")) {
      System.out.println("appleの日本語は");
      System.out.println(map.get("apple"));
    }
    else {
      System.out.println("指定したキーは存在しません：apple");
    }

    map.remove("grapes");

    if (map.containsKey("grapes")) {
      System.out.println("grapesの日本語は");
      System.out.println(map.get("grapes"));
    }
    else {
      System.out.println("指定したキーは存在しません：grapes");
    }

  }
}
