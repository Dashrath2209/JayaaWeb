package com.jayaaweb.network;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.stage.Stage;

public class NetworkMonitorApp extends Application {
  @Override
  public void start(Stage stage) throws Exception {
    FXMLLoader loader = new FXMLLoader(
      getClass().getResource("/fxml/layout.fxml"));
    Scene scene = new Scene(loader.load(), 600, 400);
    stage.setTitle("JayaaWeb Network Monitor");
    stage.setScene(scene);
    stage.show();
  }
  public static void main(String[] args) {
    launch();
  }
}