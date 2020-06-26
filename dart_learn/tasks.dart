/***
 * @author: lencx
 * @create_at: Jun 26, 2020
 * @cmd: dart dart_learn/tasks.dart
 **/

/*
假设一个项目，需要 2 个团队去完成，团队中包含多项任务。
可以分为 2 个高优先级任务（高优先级的其中，会产生 2 个任务，一个是紧急一个是不紧急），
和 2 个非高优先级任务（非高优先级的其中，会产生有 2 个任务，一个是紧急一个是不紧急）。
其中还有一个是必须依赖其他团队去做的，因为本团队没有那方面的资源，第三方也会产生一个高优先级任务和一个低优先级任务。

| task type | microtask           | event              | isolate           |
| Main task | High priority tasks | Low priority tasks | Third-party tasks |
|-----------|---------------------|--------------------|-------------------|
| H1        | h1-1                | l1-1               | NO                |
| H2        | h2-1                | l2-1               | NO                |
| L3        | h3-1                | l3-1               | NO                |
| L4        | h4-1                | l4-1               | NO                |
| C5        | ch5-1               | cl5-1              | YES               |
*/

import 'dart:async';
import 'dart:isolate';
// import 'dart:io';

Isolate isolate;

void main() {
  print("====== project start ======");
  cTask();
  // sleep(Duration(seconds: 3));
  scheduleMicrotask(() {
    print("H1 complete");
    scheduleMicrotask(() {
      print("h1-1");
    });
    Timer.run(() {
      print("l1-1");
    });
  });
  scheduleMicrotask(() {
    print("H2 complete");
    scheduleMicrotask(() {
      print("h2-1");
    });
    Timer.run(() {
      print("l2-1");
    });
  });
  Timer.run(() {
    print("L3 complete");
    scheduleMicrotask(() {
      print("h3-1");
    });
    Timer.run(() {
      print("l3-1");
    });
  });
  Timer.run(() {
    print("L4 complete");
    scheduleMicrotask(() {
      print("h4-1");
    });
    Timer.run(() {
      print("l4-1");
    });
  });
}

void cTask() async {
  final receive = ReceivePort();
  isolate = await Isolate.spawn(doCTask, receive.sendPort);
  receive.listen((data) {
    print(data);
  });
}

void doCTask(SendPort port) {
  scheduleMicrotask(() {
    print("ch5-1 complete");
  });
  Timer.run(() {
    print("cl5-1 complete");
  });
  port.send("C1 complete");
  // port.send("====== project end ======");
}