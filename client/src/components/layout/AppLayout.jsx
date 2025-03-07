import React, { lazy } from 'react'
import { sampleData } from '../constants/sampledata'


const Header = lazy(
  () => import("./Header")
)

const ChatList = lazy(
  () => import("./../specific/ChatList")
)

const Title = lazy(
  () => import("../shared/Title")
)

const AppLayout = () => (WrappedComponents) => {
    return (props) => {
        return (
          <>
            <div >
                <Title />
                <Header />
                <WrappedComponents {...props} />
            </div>
            <div className='flex ml-4'>
            <div className='first  w-[33%]'>
              <ChatList chats={sampleData}
               chatId={"1"} 
              newMessagesAlert={[{
                chatId : "1",
                count : 6,
              } 
              ]
              }
              OnlineUsers = {["1", "2"]}
              />
            </div>
            <div className='first w-[33%] p-2'>
              second
              {/* {Array.from({length :10}).map((_, index)=>(<Skeleton key={index} className="skheight w-full rounded-xl" />))} */}
            </div>
            <div className='first  w-[33%]'>
              third
            </div>
            </div>
          </>
        )
    }
}

export default AppLayout
