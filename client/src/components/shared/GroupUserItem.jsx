import React, { memo, useState } from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Loader2Icon, Minus, PlusIcon, UserRound } from 'lucide-react'
import { CommandItem } from '../ui/command'

const GroupUserItem = ({ item, setValidationcheckker }) => {
    const [sendRequest, setSendRequest] = useState(false)
    const [AddFriendhandlerIsLoading, setAddFriendhandlerIsLoading] = useState(false)

    const handler = (id) => {
        setAddFriendhandlerIsLoading(true);
        setSendRequest(prev => !prev);
        console.log(sendRequest);
        setAddFriendhandlerIsLoading(false);
        setValidationcheckker(prev=>prev.includes(id) ? prev.filter(i=> i!=id) : [...prev,id])
        console.log("Clicked id:", id);
    }

    const { avatar, name, _id } = item;

    return (
        <div> 
            <CommandItem disabled={AddFriendhandlerIsLoading} className='my-2 hover:cursor-pointer' >
                <Avatar>
                    {avatar ? (
                        <AvatarImage src={avatar} />
                    ) : (
                        <UserRound className='items-center flex my-auto mx-auto' />
                    )}
                </Avatar>
                <span>{name}</span>
                {console.log('Item ID:', _id)} 
                <span className='hover:bg-gray-500 rounded-lg absolute right-5'>
                    {!sendRequest ? (
                        AddFriendhandlerIsLoading ? (
                            <Loader2Icon className='rotation' />
                        ) : (
                            <div onClick={() => handler(_id)}> 
                            <PlusIcon />
                        </div>
                        )
                    ) : (
                        <div onClick={() => handler(_id)}>
                            <Minus />
                        </div>
                    )}
                </span>
            </CommandItem>
        </div>
    )
}

export default memo(GroupUserItem);
