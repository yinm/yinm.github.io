import java.io.*;
import java.net.*;

public class EchoServer {
  public static void main(String[] args) {
    ServerSocket echoServer = null;
    String line;
    BufferedReader is;
    PrintStream os;
    Socket clientSocket = null;

    try {
      echoServer = new ServerSocket(9999);
    }
    catch (IOException e) {
      System.out.println(e);
    }

    try {
      clientSocket = echoServer.accept();
      is = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
      os = new PrintStream(clientSocket.getOutputStream());

      while (true) {
        line = is.readLine();
        os.println(line);
      }
    }
    catch (IOException e) {
      System.out.println(e);
    }
  }
}
