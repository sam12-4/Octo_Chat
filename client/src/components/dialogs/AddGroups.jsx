import { Loader2Icon, Plus, PlusIcon, UserRound } from 'lucide-react'
import React, { useState } from 'react'
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
import { Avatar, AvatarImage } from '../ui/avatar'
import UserItem from '../shared/UserItem'
import { GroupRounded } from '@mui/icons-material'
import GroupUserItem from '../shared/GroupUserItem'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
 
const FormSchema = z.object({
  username: z.string().min(4, {
    message: "Group Name must be at least 4 characters.",
  }),
})

const AddGroups = ({ users, handler, handlerIsLoading }) => {

    const [membersarray, setMembersarray] = useState([])
    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          username: "",
        },
      })
     
      function onSubmit(data) {
        console.log("Form Submitted!", data); // Check if it prints
        toast(
            <div>
                <strong>You submitted the following values:</strong>
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            </div>
        );
    }
      console.log('set', membersarray);

    return (
        <Dialog>
            <DialogTrigger>
                <Button variant="outline" className="cursor-pointer hover:bg-gray-500 rounded-2xl duration-150"><GroupRounded /></Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-center my-2">Add Group</DialogTitle>
                    <DialogDescription>
                        <Command className="rounded-lg border shadow-md md:min-w-[450px]">
                            {/* <CommandInput placeholder="Type user name or search ..." /> */}
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="mx-4 space-y-6 my-5">
                                    <FormField
                                        control={form.control}
                                        name="username"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Group Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="shadcn" {...field} />
                                                </FormControl>
                                                <FormDescription>
                                                    Add at least three members to form a group
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                   
                            <CommandList>
                                <CommandEmpty>No results found.</CommandEmpty>
                                <CommandGroup heading="Suggestions">
                                    {users?.map((item, index) => {
                                        return !item.groupChat &&
                                            <GroupUserItem
                                                key={index}
                                                item={item}
                                                setValidationcheckker={setMembersarray}
                                            />
                                    })}
                                </CommandGroup>
                                <CommandSeparator />
                            </CommandList>
                            <Button type="submit" className='cursor-pointer disabled:cursor-not-allowed' disabled={isSubmitting || membersarray.length<3}>Submit</Button>
                            {/* <Button disabled={isSubmitting || membersarray.length<3} type="submit" className='cursor-pointer disabled:cursor-not-allowed'>Submit</Button> */}
                                </form>
                            </Form>
                        </Command>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default AddGroups
