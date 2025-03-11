import { Loader2Icon, Plus, PlusIcon, UserRound } from 'lucide-react'
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
import UserItem from '../shared/UserItem'

const AddFriends = ({ users, handler, handlerIsLoading }) => {
    

    return (
        <Dialog>
            <DialogTrigger>
                <Button variant="outline" className="cursor-pointer hover:bg-gray-500 rounded-2xl duration-150"><Plus /></Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-center my-2">Add Friend</DialogTitle>
                    <DialogDescription>
                        <Command className="rounded-lg border shadow-md md:min-w-[450px]">
                            <CommandInput placeholder="Type user name or search ..." />
                            <CommandList>
                                <CommandEmpty>No results found.</CommandEmpty>
                                <CommandGroup heading="Suggestions">
                                    {users?.map((item, index) => {
                                        return !item.groupChat && 
                                        <UserItem 
                                        key={index}
                                        item={item}
                                        />
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

export default AddFriends
