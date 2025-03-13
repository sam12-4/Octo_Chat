import AppLayout from '@/components/layout/AppLayout'
import ChatMessageBox from '@/components/specific/ChatMessageBox'
import React from 'react'

function Chat() {
  return (
    <div className='flex h-full flex-col justify-between w-full'>
      <div>Chat</div>
      <ChatMessageBox />
    </div>
  )
}

export default AppLayout()(Chat)
