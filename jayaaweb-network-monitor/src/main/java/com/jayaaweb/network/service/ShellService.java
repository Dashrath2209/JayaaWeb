// src/main/java/com/jayaaweb/network/service/ShellService.java
package com.jayaaweb.network.service;

import com.jayaaweb.network.model.PingResult;
import com.jayaaweb.network.model.TraceHop;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class ShellService {

  public PingResult ping(String host) throws Exception {
    List<String> cmd = List.of("ping", "-c", "4", host);
    ProcessBuilder pb = new ProcessBuilder(cmd);
    Process proc = pb.start();
    try (BufferedReader br = new BufferedReader(new InputStreamReader(proc.getInputStream()))) {
      String line; double avg = 0;
      while ((line = br.readLine()) != null) {
        if (line.contains("rtt min/avg/max")) {
          String[] parts = line.split("=")[1].split("/");
          avg = Double.parseDouble(parts[1]);
        }
      }
      proc.waitFor();
      PingResult res = new PingResult();
      res.setAddress(host);
      res.setAvgLatency(avg);
      return res;
    }
  }

  public List<TraceHop> traceroute(String host) throws Exception {
    List<String> cmd = List.of("traceroute", host);
    ProcessBuilder pb = new ProcessBuilder(cmd);
    Process proc = pb.start();
    List<TraceHop> hops = new ArrayList<>();
    try (BufferedReader br = new BufferedReader(new InputStreamReader(proc.getInputStream()))) {
      String line;
      while ((line = br.readLine()) != null) {
        String[] parts = line.trim().split("\\s+");
        if (Character.isDigit(parts[0].charAt(0))) {
          TraceHop hop = new TraceHop();
          hop.setHopNumber(Integer.parseInt(parts[0]));
          hop.setHopAddress(parts[1]);
          hop.setLatency(Double.parseDouble(parts[2].replace("ms","")));
          hops.add(hop);
        }
      }
      proc.waitFor();
      return hops;
    }
  }
}