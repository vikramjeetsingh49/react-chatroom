import React from 'react'

const Messages = props => {
 
  return (
  <ul className="message-list">
              {props.messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === props.user.username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>
  )
}

export default Messages