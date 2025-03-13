// import { sampleData } from '@/components/constants/sampledata';
import AppLayout from '@/components/layout/AppLayout'
import ChatList from '@/components/specific/ChatList';
import { Skeleton } from '@mui/material';
import React from 'react'

const Home = () => {
  return (
    <>Select a chat to show its messages</>
  )
}

export default AppLayout()(Home);
