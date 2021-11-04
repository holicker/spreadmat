import Fetch from "json-fetch";
import React from "react";
import SockJsClient from "react-stomp";
import styled from "styled-components";
import UsernameGenerator from "username-generator";
import TalkBox from "../lib/chat/src/TalkBox";

const ChatPageBlock = styled.div`
  display: flex;
  height: 500px;
  background-color: black;
  justify-content: center;
`;

class TestPage extends React.Component {
  constructor(props) {
    super(props);
    console.log("생성자 통과 시작");
    // randomUserId is used to emulate a unique user id for this demo usage
    this.randomUserName = UsernameGenerator.generateUsername("-");
    this.sendURL = "/message";
    this.state = {
      clientConnected: false,
      messages: [],
    };

    console.log("생성자 통과 끝");
  }

  onMessageReceive = (msg, topic) => {
    console.log("메세지 리시브 시작");
    // alert(
    //   JSON.stringify(msg) +
    //     " @ " +
    //     JSON.stringify(this.state.messages) +
    //     " @ " +
    //     JSON.stringify(topic)
    // );
    this.setState((prevState) => ({
      messages: [...prevState.messages, msg],
    }));
    console.log(`통과된 메세지 : ${JSON.stringify(msg)}`);
    console.log("메세지 리시브 통과");
  };

  sendMessage = (msg, selfMsg) => {
    console.log(`selfMsg : ${JSON.stringify(selfMsg)}`);
    console.log("메세지 센드 시작");
    try {
      var send_message = {
        roomId: 3,
        writer: selfMsg.writer,
        message: selfMsg.message,
        chattedTime: null,
      };
      console.log(`send_massage ${JSON.stringify(send_message)}`);
      this.clientRef.sendMessage("/app/message", JSON.stringify(send_message));
      return true;
    } catch (e) {
      return false;
    }
  };

  componentWillMount() {
    console.log("call history");
    Fetch("/history/3", {
      method: "GET",
    }).then((response) => {
      console.log(`response : ${JSON.stringify(response.body)}`);

      this.setState({ messages: response.body });
    });
  }

  componentDidMount() {
    console.log("Did mount 스크롤 아래로");
  }

  render() {
    const wsSourceUrl = "https://localhost:8443/chatting";
    console.log(`현재 이름 ${this.randomUserName}`);
    console.log(`현재 id ${this.randomUserId}`);
    return (
      <ChatPageBlock>
        <TalkBox
          topic="이건 테스트 페이지입니다"
          currentUser={this.randomUserName}
          messages={this.state.messages}
          onSendMessage={this.sendMessage}
          connected={this.state.clientConnected}
        />

        <SockJsClient
          url={wsSourceUrl}
          topics={["/topic/public"]}
          onMessage={this.onMessageReceive}
          ref={(client) => {
            this.clientRef = client;
          }}
          onConnect={() => {
            this.setState({ clientConnected: true });
          }}
          onDisconnect={() => {
            this.setState({ clientConnected: false });
          }}
          debug={false}
          style={[{ width: "100%", height: "100%" }]}
        />
      </ChatPageBlock>
    );
  }
}
export default TestPage;
