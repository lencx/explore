/*
 * @author: lencx
 * @create_at: Jun 25, 2020
 * @cmd: dart dart_learn/symbol.dart
 **/

void main() {
  Map test = new Map();

  test[#t] = "symbol test";

  // {Symbol("t"): symbol test}
  print(test);

  // symbol test
  print(test[Symbol('t')]);

  // Symbol("x")
  print(#x);
}