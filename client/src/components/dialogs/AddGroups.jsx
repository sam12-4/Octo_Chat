import { Plus, UserRound } from 'lucide-react'
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
} from "lucide-react"

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "../ui/command"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage } from '../ui/avatar'

const AddGroups = ({ users, handler, handlerIsLoading }) => {
    const usersArray = [{
        avatar: "",
        name: "sameer2",
        _id: 3,
        groupChat: false,
        members: ["1", "2"]
    }]
    return (
        <Dialog>
            <DialogTrigger>
                <Button variant="outline" className="cursor-pointer hover:bg-gray-500 rounded-2xl duration-150"><Plus /></Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-center my-2">Add Group</DialogTitle>
                    <DialogDescription>
                        <Command className="rounded-lg border shadow-md md:min-w-[450px]">
                            <CommandInput placeholder="Type user name or search ..." />
                            <CommandList>
                                <CommandEmpty>No results found.</CommandEmpty>
                                <CommandGroup heading="Suggestions">
                                    {users?.map((item, index) => {
                                        return !item.groupChat && 
                                        <div key={index} onClick={handler}>
                                        <CommandItem disabled={handlerIsLoading} className='my-2 hover:cursor-pointer' >
                                            <Avatar>
                                                {item.avatar ? (
                                                    <AvatarImage src={item.avatar} />
                                                ) : (
                                                    <UserRound className='items-center flex my-auto mx-auto' />
                                                )}
                                            </Avatar>
                                            <span >{item.name}</span>
                                        </CommandItem>
                                        </div>
                                    })}
                                </CommandGroup>
                                <CommandSeparator />
                            </CommandList>
                        </Command>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default AddGroups
