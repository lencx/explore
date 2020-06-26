/***
 * @author: lencx
 * @create_at: Jun 26, 2020
 * @cmd: dart dart_learn/isolate.dart
 **/

import 'dart:isolate';

Isolate isolate;
String name = 'dart';

void main() {
  isolateServer();
}

void isolateServer() async {
  final receive = ReceivePort();
  isolate = await Isolate.spawn(changeName, receive.sendPort);

  receive.listen((data) {
    print('name is $data');
    print('global name is $name');
  });
}

void changeName(SendPort port) {
  name = 'lencx';
  port.send(name);
  print('changeName is $name');
}