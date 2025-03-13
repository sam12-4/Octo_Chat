import React from 'react'
import { SendIcon } from 'lucide-react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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
import { AttachFile } from '@mui/icons-material'
import { Label } from '../ui/label'
import { useTheme } from '../theme-provider'

const formSchema = z.object({
    username: z.string().min(0, {
        message: "Username must be at least 2 characters.",
    }),
})


const ChatMessageBox = () => {


    // 1. Define your form.
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    const {theme}=useTheme()
    {console.log(theme)}
    return (
        <div className=' flex flex-col justify-center pt-4 shadow-lg relative'>

            <Form {...form} className="">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 flex items-center gap-4 pr-5 ">
                    {/* < */}
                    <Label htmlFor="picture"><AttachFile className='rotate-45 absolute text-gray-500 left-5 hover:cursor-pointer'/></Label>
                    <Input id="picture" type="file" className="hidden"/>  
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem className="flex-grow">
                                <FormControl>
                                    <Input className={`w-full p-4 pl-9 ${theme=="light" ? "bg-gray-200" : "bg-slate-900"}`} placeholder="Enter your Message.." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                       
                    />
                    <Button type="submit" className="mb-3"><SendIcon /></Button>
                </form>
            </Form>
        </div>
    )
}
//   return (
//     <div className='bottom-0 px-4 flex  items-center gap-4'>
//         <Input  type="email" placeholder="Enter Message.." />
//         
//     </div>
//   )
// }

export default ChatMessageBox
