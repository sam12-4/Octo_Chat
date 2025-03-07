import { Circle } from 'lucide-react'
import React, { memo } from 'react'
import { Link } from 'react-router'

const ChatItem = ({
    avatar = [],
    name,
    _id,
    groupChat=false,
    sameSender,
    isOnline,
    newMessageAlert,
    newMessage,
    index = 0,
    handleDeleteChatOpen

}) => {
  return (
    <Link to={`/chat/${_id}`}>
      {console.log(isOnline)}
        <div>{name}</div>
        {newMessage && newMessageAlert.count>0 && newMessageAlert.chatId==_id && <div>{newMessageAlert.count} new Messages</div>}
        {isOnline && <div>Online</div>}
        {isOnline && <div><Circle className='bg-green-400 rounded-2xl'/></div>}
    </Link>
  )
}

export default memo(ChatItem)

