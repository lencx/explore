/*
 * @author: lencx
 * @create_at: Jun 28, 2020
 **/
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

import 'package:dchat/widgets/chat_message.dart';

final fmtDate = DateFormat('mm-dd HH:mm:ss');
String _name = 'lencx';

class ChatScreen extends StatefulWidget {
  @override
  _ChatScreenState createState() => _ChatScreenState();
}

class _ChatScreenState extends State<ChatScreen> {
  final _textControl = TextEditingController();
  final List<ChatMessage> _chatMessages = [];

  void _handleSend(String value) {
    if (value == '') return;
    final msg = ChatMessage(
      message: value,
      name: _name,
      date: fmtDate.format(DateTime.now()),
      // avatar: 'Z',
    );
    setState(() {
      _chatMessages.insert(0, msg);
    });
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
                reverse: true,
                padding: EdgeInsets.all(8.0),
                itemBuilder: (_, int idx) => _chatMessages[idx],
                itemCount: _chatMessages.length,
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
