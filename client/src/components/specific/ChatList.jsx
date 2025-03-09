import React from 'react'
import ChatItem from '../shared/ChatItem';
import { sampleData } from '../constants/sampleData';

const ChatList = ({
  w = "100%",
  chatId,
  chats = [],
  OnlineUsers = [],
  newMessagesAlert = [{
    chatId: "",
    count: 0
  }],
  handleDeleteChat
}) => {
  return (
    <div>
      {chats?.map((data, index) => {
        const {
          avatar,
          name,
          _id,
          groupChat,
          members
        } = data;

        //  const newMessage = newMessageAlert.find((chatId)=>{chatId ==_id})
        // const isOnline = members?.some((member) =>{ 
        //   return OnlineUsers.find((id)=> id == _id)}
        // )
        const isOnline = OnlineUsers.find((id)=> id == _id)
        
      
        const newMessageAlert = newMessagesAlert.find(({ chatId }) => chatId == _id)

        return <ChatItem
          key={_id}
          avatar={avatar}
          name={name}
          _id = {_id}
          groupChat = {groupChat}
          sameSender={chatId === _id}
          isOnline = {isOnline}
          newMessageAlert = {newMessageAlert}
          newMessage={newMessageAlert}
          index = {index}
          handleDeleteChat = {handleDeleteChat}    
        
          />

          // return <div key={index} >{data}</div>
        })}
    </div>
  )
}

export default ChatList
