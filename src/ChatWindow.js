import React, {Component} from 'react';
import AddMessage from './AddMessage';
import Messages from './Messages'

class ChatWindow extends Component {
  
  addMessage = message => {
  		this.props.addMessage(this.props.user.username, message);
  }
 render() {
   const { user, messages, addMessage} = this.props; 
  return (
  <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{user.username}</div>
			<Messages messages={messages} user={user} />
        <AddMessage addMessage={this.addMessage} />
	</div>
  );
 }
}

export default ChatWindow