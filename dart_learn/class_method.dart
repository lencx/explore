/***
 * @author: lencx
 * @create_at: Jun 25, 2020
 * @cmd: dart dart_learn/class_method.dart
 **/

import './class.dart';

void main() {
  Person p = new Person();

  // Error: The method '_run' isn't defined for the class 'Person'.
  // p._run();
  // Error: The getter '_other' isn't defined for the class 'Person'.
  // print(p._other);

  p.pubRun();
  print(p.name); // lencx
}