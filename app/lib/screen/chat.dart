/*
 * @author: lencx
 * @create_at: Jun 28, 2020
 **/
import 'package:flutter/material.dart';

class ChatScreen extends StatefulWidget {
  @override
  _ChatScreenState createState() => _ChatScreenState();
}

class _ChatScreenState extends State<ChatScreen> {
  final _textControl = TextEditingController();

  void _handleSend(String value) {
    // TODO: handle text
    _textControl.clear();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Chat'),
      ),
      body: Container(
        child: Column(
          children: <Widget>[
            Flexible(
              child: ListView.builder(
                padding: EdgeInsets.all(8.0),
                reverse: true,
                // itemBuilder: (_, int idx) => Text('test ===> $idx'),
                itemBuilder: (_, int idx) => _chatMessage(idx),
              )
            ),
            Divider(height: 1.0),
            Container(
              decoration: BoxDecoration(color: Theme.of(context).cardColor),
              child: _buildTextComposer(),
            )
          ],
        )
      ),
    );
  }

  Widget _chatMessage(int idx) {
    return Container(
      margin: EdgeInsets.symmetric(vertical: 10.0),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Container(
            child: CircleAvatar(
              child: Text('Z'),
            ),
          ),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              Text('lencx HH:mm:ss'),
              Text('$idx'),
            ],
          )
        ],
      ),
    );
  }

  Widget _buildTextComposer() {
    return IconTheme(
      data: IconThemeData(color: Theme.of(context).accentColor),
      child: Container(
        margin: EdgeInsets.symmetric(horizontal: 8.0),
        child: Row(
          children: <Widget>[
            Flexible(
              child: TextField(
                controller: _textControl,
                onSubmitted: _handleSend,
                decoration: InputDecoration.collapsed(hintText: 'Send a message'),
              ),
            ),
            Container(
              margin: EdgeInsets.only(left: 4.0),
              child: IconButton(
                icon: Icon(Icons.send),
                onPressed: () => _handleSend(_textControl.text),
              ),
            )
          ],
        ),
      )
    );
  }
}
