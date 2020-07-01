/*
 * @author: lencx
 * @create_at: Jul 01, 2020
 **/
import 'package:flutter/material.dart';
import 'package:fluro/fluro.dart';

class Routes {
  static String root = '/';
  static String chat = '/chat';
  static String time = '/time';

  static void configureRoutes(Router router) {
    var handler = Handler(
      // ignore: missing_return
      handlerFunc: (BuildContext context, Map<String, List<String>> params) {
      print('ROUTE WAS NOT FOUND !!!');
    });
    router.notFoundHandler = handler;
  }
}