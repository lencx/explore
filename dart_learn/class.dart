/***
 * @author: lencx
 * @create_at: Jun 25, 2020
 * @cmd: dart dart_learn/class.dart
 **/

class Cat {
  String color;

  Cat.yellow() {
    this.color = 'yellow';
  }
  Cat.black() {
    this.color = 'black';
  }
}

class Person {
  String name = 'lencx';
  String _other = 'other'; // private

  // private method
  void _run() {
    print('private function _run');
  }

  // public method
  void pubRun() {
    this._run();
  }
}

void main() {
  Cat yellowCat = new Cat.yellow();
  print('yellowCat: ${yellowCat.color}');
  Cat blackCat = new Cat.black();
  print('blackCat: ${blackCat.color}');

  Person p = new Person();
  p._run();
  p.pubRun();

  print(p.name); // lencx
  print(p._other); // other
}