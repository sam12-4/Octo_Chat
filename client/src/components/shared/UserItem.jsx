import React, { memo, useState } from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Loader2Icon, Minus, PlusIcon, UserRound } from 'lucide-react'
import { CommandItem } from '../ui/command'

const UserItem = ({ item }) => {
    const [sendRequest, setSendRequest] = useState(false)
    const [AddFriendhandlerIsLoading, setAddFriendhandlerIsLoading] = useState(false)
    const handler = () => {
        setAddFriendhandlerIsLoading(true);
        setSendRequest(prev => !prev);
        console.log(sendRequest);
        setAddFriendhandlerIsLoading(false);
    }
    return (
        <div onClick={handler}>
            <CommandItem disabled={AddFriendhandlerIsLoading} className='my-2 hover:cursor-pointer' >
                <Avatar>
                    {item.avatar ? (
                        <AvatarImage src={item.avatar} />
                    ) : (
                        <UserRound className='items-center flex my-auto mx-auto' />
                    )}
                </Avatar>
                <span >{item.name}</span>
                <span className='hover:bg-gray-500 rounded-lg absolute right-5' >{!sendRequest ? AddFriendhandlerIsLoading ? <Loader2Icon className='rotation' /> : <PlusIcon /> : <div onClick={handler}><Minus /></div>}</span>
            </CommandItem>
        </div>
    )
}

export default memo(UserItem)
