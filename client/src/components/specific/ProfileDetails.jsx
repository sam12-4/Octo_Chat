import { User2 } from 'lucide-react'
import React from 'react'
import { AlternateEmail, Face, CalendarMonth } from '@mui/icons-material'
import moment from 'moment'

const ProfileDetails = () => {
    return (
        <div className='border-2 border-white h-[80vh] sticky rounded-2xl p-4 shadow-2xl flex items-center flex-col overflow-y-auto '>
            <User2 className='md:size-36 size-20' />
            <ProfileCard heading={"Bio"} text={"sdfdsf"} />
            <ProfileCard heading={"Username"} text={"sam12"} icon={<AlternateEmail />} />
            <ProfileCard heading={"Name"} text={"sameer"} icon={<Face />} />
            <ProfileCard heading={"Joined"} text={moment('2025-01-03T19:00:00.000Z').fromNow()} icon={<CalendarMonth />} />
        </div>
    )
}

const ProfileCard = ({ text, icon, heading }) => {
    return <div className='my-4 flex items-center gap-2'>
        {icon}
        <div>
            <div className='text-lg'>
                {text}
            </div>
            <div className='text-center text-xs text-gray-400'>
                {heading}
            </div>
        </div>

    </div>
}

export default ProfileDetails
