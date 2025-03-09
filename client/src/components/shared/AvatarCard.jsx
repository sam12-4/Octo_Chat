import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar'
import { User2 } from 'lucide-react'


const AvatarCard = ({ avatar }) => {
    return (
        <div>
            <Avatar>
                {avatar ? (
                    <AvatarImage src={avatar} />
                ) : (
                    <User2 className='items-center flex my-auto' />
                )}
            </Avatar>
        </div>
    )
}

export default AvatarCard
