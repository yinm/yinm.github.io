import java.io.*;
import java.net.*;

public class EchoClient {
  public static void main(String[] args) {
    Socket echoSocket = null;
    DataOutputStream os = null;
    BufferedReader is = null;

    try {
      echoSocket = new Socket("localhost", 9999);
      os = new DataOutputStream(echoSocket.getOutputStream());
      is = new BufferedReader(new InputStreamReader(echoSocket.getInputStream()));
    }
    catch (UnknownHostException e) {
      System.err.println("Don't know about host: localhost");
    }
    catch (IOException e) {
      System.err.println("Couldn't get I/O for the connection to: localhost");
    }

    if (echoSocket != null && os != null && is != null) {
      try {
        os.writeBytes("client send message...\n");

        String responseLine;
        if ((responseLine = is.readLine()) != null) {
          System.out.println("Server: " + responseLine);
        }

        os.close();
        is.close();
        echoSocket.close();
      }
      catch (UnknownHostException e) {
        System.err.println("Trying to connect to unknown host: " + e);
      }
      catch (IOException e) {
        System.err.println("IOException: " + e);
      }
    }
  }
}
