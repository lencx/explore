/*
 * @author: lencx
 * @create_at: Jun 28, 2020
 **/
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

import 'package:explore/widgets/chat_message.dart';

final fmtDate = DateFormat('MM-dd HH:mm:ss');
String _name = 'lencx';

class ChatScreen extends StatefulWidget {
  @override
  _ChatScreenState createState() => _ChatScreenState();
}

class _ChatScreenState extends State<ChatScreen> with TickerProviderStateMixin {
  final _textControl = TextEditingController();
  final List<ChatMessage> _chatMessages = [];
  final FocusNode _focusNode = FocusNode();
  bool _isComposing = false;

  void _handleSend(String value) {
    final msg = ChatMessage(
      message: value,
      name: _name,
      date: fmtDate.format(DateTime.now()),
      animationController: AnimationController(
        duration: const Duration(milliseconds: 700),
        vsync: this,
      ),
      // avatar: 'Z',
    );
    setState(() {
      _chatMessages.insert(0, msg);
      _isComposing = false;
    });
    _textControl.clear();
    msg.animationController.forward();
    _focusNode.requestFocus();
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
          )),
          Divider(height: 1.0),
          Container(
            decoration: BoxDecoration(color: Theme.of(context).cardColor),
            child: _buildTextComposer(),
          )
        ],
      )),
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
                  onSubmitted: _isComposing ? _handleSend : null,
                  onChanged: (String value) {
                    setState(() {
                      _isComposing = value.isNotEmpty;
                    });
                  },
                  decoration: InputDecoration.collapsed(hintText: 'Send a message'),
                  focusNode: _focusNode,
                ),
              ),
              // How to disable default Widget splash effect in Flutter?
              // see: https://stackoverflow.com/questions/50020523/how-to-disable-default-widget-splash-effect-in-flutter
              Theme(
                data: ThemeData(
                  splashColor: Colors.transparent,
                  highlightColor: Colors.transparent,
                ),
                child: Container(
                  margin: const EdgeInsets.symmetric(horizontal: 4.0),
                  child: IconButton(
                    icon: Icon(Icons.send, color: _isComposing ? Theme.of(context).accentColor : null),
                    onPressed: _isComposing ? () => _handleSend(_textControl.text) : null,
                  ),
                ),
              ),
            ],
          ),
        ));
  }
}
