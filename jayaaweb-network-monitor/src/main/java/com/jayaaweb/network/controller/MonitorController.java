// src/main/java/com/jayaaweb/network/controller/MonitorController.java
package com.jayaaweb.network.controller;

import com.jayaaweb.network.model.PingResult;
import com.jayaaweb.network.model.TraceHop;
import com.jayaaweb.network.service.ShellService;
import javafx.application.Platform;
import javafx.fxml.FXML;
import javafx.scene.chart.LineChart;
import javafx.scene.chart.XYChart;
import javafx.scene.control.*;
import java.util.List;

public class MonitorController {
  @FXML private TextField hostField;
  @FXML private Button pingBtn;
  @FXML private Button traceBtn;
  @FXML private Label pingLabel;
  @FXML private LineChart<Number,String> traceChart;

  private final ShellService shell = new ShellService();

  @FXML
  public void initialize() {
    pingBtn.setOnAction(e -> runPing());
    traceBtn.setOnAction(e -> runTrace());
  }

  private void runPing() {
    String host = hostField.getText().trim();
    new Thread(() -> {
      try {
        PingResult res = shell.ping(host);
        Platform.runLater(() -> pingLabel.setText(
          "Avg Latency: " + res.getAvgLatency() + " ms"));
      } catch (Exception ex) {
        Platform.runLater(() -> pingLabel.setText("Ping failed"));
      }
    }).start();
  }

  private void runTrace() {
    String host = hostField.getText().trim();
    new Thread(() -> {
      try {
        List<TraceHop> hops = shell.traceroute(host);
        XYChart.Series<Number,String> series = new XYChart.Series<>();
        for (TraceHop h : hops) {
          series.getData().add(new XYChart.Data<>(h.getHopNumber(), h.getHopAddress()));
        }
        Platform.runLater(() -> traceChart.getData().setAll(series));
      } catch (Exception ex) {
        // handle
      }
    }).start();
  }
}