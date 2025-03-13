import React, { lazy } from 'react'
import { sampleData } from '../constants/sampleData'
import { useParams } from 'react-router'


const Header = lazy(
  () => import("./Header")
)

const ProfileDetails = lazy(
  () => import("../specific/ProfileDetails")
)

const ChatList = lazy(
  () => import("./../specific/ChatList")
)

const Title = lazy(
  () => import("../shared/Title")
)


const AppLayout = () => (WrappedComponents) => {
  return (props) => {
    const params = useParams();
    const chatId = params.chatId;
    const handleDeleteChat = (e, _id, groupChat) => {
      console.log("delete Chat", _id);
    }
    return (
      <>
        <div >
          <Title />
          <Header />
          
        </div>
        <div className='flex ml-4'>
          <div className='first w-[40%]  md:w-[33%]'>
            <ChatList chats={sampleData}
              chatId={chatId}
              newMessagesAlert={[{
                chatId: "1",
                count: 6,
              }
              ]
              }
              OnlineUsers={["1", "3"]}
              // handleDeleteChat
            handleDeleteChat ={handleDeleteChat}
            />
          </div>
          <div className='first w-[60%] md:w-[33%] p-2'>
          <WrappedComponents {...props} />
            {/* {Array.from({length :10}).map((_, index)=>(<Skeleton key={index} className="skheight w-full rounded-xl" />))} */}
          </div>
          <div className='first md:block hidden w-[33%]'>
            <ProfileDetails />
          </div>
        </div>
      </>
    )
  }
}

export default AppLayout
