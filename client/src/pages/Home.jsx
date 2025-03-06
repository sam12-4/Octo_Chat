import AppLayout from '@/components/layout/AppLayout'
import React from 'react'

const Home = () => {
  return (
    <div className='flex ml-4'>
    <div className='first bg-amber-200 w-[33%]'>
      first
    </div>
    <div className='first bg-blue-500 w-[33%]'>
      second
    </div>
    <div className='first bg-white w-[33%]'>
      third
    </div>
    </div>
  )
}

export default AppLayout()(Home);
