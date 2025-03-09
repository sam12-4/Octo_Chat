import { Notifications } from '@mui/icons-material'
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog"
import { Button } from "@/components/ui/button"

const NotificationDialog = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <Button variant="outline" className="cursor-pointer hover:bg-gray-500 rounded-2xl duration-150"><Notifications /></Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default NotificationDialog
