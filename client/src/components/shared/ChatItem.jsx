import { Circle } from 'lucide-react'
import React, { memo } from 'react'
import { Link, useParams } from 'react-router'
import AvatarCard from './AvatarCard'
import { useTheme } from '../theme-provider'

const ChatItem = ({
  avatar = "",
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  newMessage,
  index = 0,
  handleDeleteChat

}) => {
  const params = useParams();
  const isActiveChat = params.chatId == _id;
  const { theme } = useTheme();
  
  return (
    <div className={` hover:cursor-pointer duration-300 rounded-2xl relative my-4 ${theme=="light" ? isActiveChat? "bg-gray-200" : "hover:bg-gray-300" :isActiveChat? "bg-gray-700" : "hover:bg-gray-800"}`}> 
      <Link to={`/chat/${_id}`} className='' onContextMenu={(e)=>handleDeleteChat(e, _id, groupChat)}>  
      <div className='flex items-center p-2'>
        <AvatarCard avatar={avatar}/>
      <div className='p-3 '>
        
        <div>{name}</div>
        {newMessage && newMessageAlert.count > 0 && newMessageAlert.chatId == _id && <div>{newMessageAlert.count} new Messages</div>}
        {isOnline && <div><Circle className='bg-green-400 rounded-2xl size-4 absolute right-3 bottom-3' /></div>}
      </div>
      </div>
      </Link>
    </div>
  )
}

export default memo(ChatItem)

