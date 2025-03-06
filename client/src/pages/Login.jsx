import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { CameraIcon } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useFileHandler } from "6pp";



// Validation Schemas
const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const signupSchema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  bio: z.string().min(5, "Bio must be atleast 5 characters long")
});



const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  // Choose validation schema based on form type
  const formSchema = isLogin ? loginSchema : signupSchema;

  // Define the form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: isLogin
      ? { email: "", password: "" }
      : { username: "", email: "", password: "", bio: "" },
  });

  const avatar = useFileHandler("single",1);

  // Form Submit Handler
  function onSubmit(values) {
    console.log(isLogin ? "Login Data:" : "Signup Data:", values);
  }

  return (
    <div className="max-w-md mx-auto p-6 shadow-lg border-white border-1 rounded-lg mt-20 mb-5">
      <h2 className="text-2xl font-bold text-center mb-4">
        {isLogin ? "Login" : "Signup"}
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {!isLogin && (
            <div className="flex flex-col justify-center items-center">
              {/* Label to trigger file input on click */}
              

              <input
                type="file"
                name="file"
                id="file"
                className="hidden" // Hide the input field
                onChange={avatar.changeHandler}
              />
              <Avatar className="size-48">
                <AvatarImage src={avatar.preview} alt="User Profile" />
                <AvatarFallback className="text-5xl">
                  {form.watch("username")?.charAt(0).toUpperCase() || "?"}
                </AvatarFallback>
              </Avatar>
                <label htmlFor="file" className="cursor-pointer absolute ">
                <CameraIcon />
              </label>
              
               
              
              {avatar.error && <div className="text-red-400 text-center">{avatar.error} therefore it was not inserted</div>}
            </div>
          )}


          {!isLogin && (
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter username *" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

          )}

          {!isLogin &&
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Enter Bio *" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          }

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Enter email *" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Enter password *" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full hover:cursor-pointer">
            {isLogin ? "Login" : "Signup"}
          </Button>
        </form>
      </Form>

      <p className="text-center mt-4">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          className="text-blue-500 hover:underline hover:cursor-pointer"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Signup" : "Login"}
        </button>
      </p>
    </div>
  );
};

export default AuthForm;
