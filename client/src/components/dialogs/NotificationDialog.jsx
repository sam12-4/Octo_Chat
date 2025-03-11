import { Notifications } from '@mui/icons-material'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog"
import { Button } from "@/components/ui/button"
import React, { memo, useState } from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Loader2Icon, Minus, PlusIcon, UserRound } from 'lucide-react'
import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "../ui/command"
import { sampleNotification } from '../constants/sampleData'

const NotificationDialog = () => {
    const [NotificationItems, setNotificationItems] = useState(sampleNotification);

    return (
        <Dialog>
            <DialogTrigger>
                <Button variant="outline" className="cursor-pointer hover:bg-gray-500 rounded-2xl duration-150">
                    <Notifications />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-center my-2">Notifications</DialogTitle>
                    <DialogDescription>
                        <Command className="rounded-lg border shadow-md md:min-w-[450px]">
                            <CommandList>
                                <CommandGroup heading="Notifications">
                                    {NotificationItems.length > 0 ? (
                                        NotificationItems.map((notification, index) => (
                                            <NotificationItem key={index} item={notification} />
                                        ))
                                    ) : (
                                        <p className="text-center my-6 text-gray-500">No notifications to show..</p>
                                    )}
                                </CommandGroup>
                                <CommandSeparator />
                            </CommandList>
                        </Command>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default memo(NotificationDialog);

const NotificationItem = memo(({ item }) => {
    const [sendRequest, setSendRequest] = useState(false);
    const [IsLoading, setIsLoading] = useState(false);
    const { avatar, name } = item.sender;

    const accept =(request) => {
        console.log(request);
    }
    

    return (
        <CommandItem className="my-2 flex items-center justify-between ">
            <div className="flex items-center space-x-2" >
                <Avatar>
                    {avatar ? (
                        <AvatarImage src={avatar} />
                    ) : (
                        <UserRound className="items-center flex my-auto mx-auto" />
                    )}
                </Avatar>
                <span>{name}</span>
            </div>
            <div className='flex gap-4'>
                <Button className="hover:cursor-pointer bg-green-500 duration-500" onClick={()=>{accept(true)}}>Accept</Button>
                <Button className="hover:cursor-pointer bg-red-500" onClick={()=>{accept(false)}}>Deny</Button>
            </div>
        </CommandItem>
    );
});
