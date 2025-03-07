import { Skeleton } from '@mui/material'
import React from 'react'

const LayoutLoader = () => {
    return (
        <>
        <div className="navbar">
        <Skeleton className="skheight rounded-2xl my-5 ml-3 mr-3 p-5 shadow-2x h-nav" />
        </div>
        <div className='flex ml-4'>
            <div className='first  w-[33%]'>
            </div>
            <div className='first w-[33%] p-2'>
              {Array.from({length :10}).map((_, index)=>(<Skeleton key={index} className="skheight w-full rounded-xl" />))}
            </div>
            <div className='first  w-[33%]'>
              
            </div>
            </div>
        </>
    )
}

export default LayoutLoader
