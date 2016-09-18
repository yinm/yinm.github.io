import java.text.*;
import java.util.*;

class ShowProfile implements ProfileInterface {
  public void showDate() {
    SimpleDateFormat dateformatter = new SimpleDateFormat("yyyy/MM/dd");
    String dateString = dateformatter.format(new Date());
    System.out.println(dateString);
  }
  public void showName(String name) {
    System.out.println(name);
  }
  public void showAddress(String address) {
    System.out.println(address);
  }

}
