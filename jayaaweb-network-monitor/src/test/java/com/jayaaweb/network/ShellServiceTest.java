// src/test/java/com/jayaaweb/network/ShellServiceTest.java
package com.jayaaweb.network;

import com.jayaaweb.network.service.ShellService;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class ShellServiceTest {
  @Test
  void pingLocalhost() throws Exception {
    ShellService s = new ShellService();
    assertTrue(s.ping("127.0.0.1").getAvgLatency() >= 0);
  }
}