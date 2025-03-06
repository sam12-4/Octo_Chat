import { Skeleton } from '@mui/material'
import React from 'react'

const LayoutLoader = () => {
    return (
        <div className="flex flex-col space-y-3  mx-auto justify-center">
            {/* <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div> */}
            <div className='flex flex-col ml-4 gap-5 h-[100vh] w-[100vw]'>
                
              {Array.from({length :10}).map((_, index)=>(<Skeleton key={index} className="h-[33%] w-[250px] rounded-xl" />))}
            </div>
        </div>
    )
}

export default LayoutLoader
