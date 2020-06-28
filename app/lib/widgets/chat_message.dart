/*
 * @author: lencx
 * @create_at: Jun 28, 2020
 **/
import 'package:flutter/material.dart';

class ChatMessage extends StatelessWidget {
  ChatMessage({ this.message, this.avatar, this.name, this.date });
  final message, avatar, name, date;

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.symmetric(vertical: 10.0),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Container(
            margin: EdgeInsets.only(right: 10.0),
            child: CircleAvatar(child: Text(avatar ?? name[0])),
          ),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              Row(
                children: <Widget>[
                  Text(name),
                  Container(
                    margin: EdgeInsets.only(left: 10.0),
                    child: Text(date, style: TextStyle(fontSize: 10.0)),
                  ),
                ],
              ),
              Text(message),
            ],
          )
        ],
      ),
    );
  }
}
