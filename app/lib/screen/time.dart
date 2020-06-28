/*
 * @author: lencx
 * @create_at: Jun 26, 2020
 **/
import 'dart:async';

import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

final fmtDate = DateFormat('yyyy-mm-dd HH:mm:ss');
final timePeriod = Duration(seconds: 1);

class TimeScreen extends StatefulWidget {
  @override
  _TimeScreenState createState() => _TimeScreenState();
}

class _TimeScreenState extends State<TimeScreen> {
  String currTime;

  @override
  void initState() {
    super.initState();
    currTime = getCurrentTime();
    refreshTime();
  }

  String getCurrentTime() {
    var now = DateTime.now();
    return fmtDate.format(now);
  }

  void refreshTime() {
    Timer.periodic(timePeriod, (_timer) {
      setState(() {
        currTime = getCurrentTime();
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Center(
      child: Column(
        children: <Widget>[
          Text(currTime),
          Text(currTime),
        ],
      ),
    ));
  }
}
