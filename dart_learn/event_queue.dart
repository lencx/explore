/***
 * @author: lencx
 * @create_at: Jun 26, 2020
 * @cmd: dart dart_learn/event_queue.dart
 **/

import 'dart:async';
import 'dart:io';

/*
 * run
 * 1. microtask
 * 2. event
 * 3. microtask in event
 * 4. event in microtask
*/
void main() {
  print("start");
  Timer.run(() {
    scheduleMicrotask(() => print("microtask3 in event"));
    print("event");
    for (int i = 0; i < 1000000000; i++) {
      if (i == 1000000) {
        scheduleMicrotask(() {
          print('microtask in event #########');
        });
      }
    }
  });
  scheduleMicrotask(() => print("microtask"));
  scheduleMicrotask(() {
    print("microtask2");
    Timer.run(() {
      print("event in microtask2");
    });
  });
  sleep(Duration(seconds: 1));
  print("end");
  Timer.run(() {
    print("event2");
    scheduleMicrotask(() => print("microtask4 in event2"));
  });
}
