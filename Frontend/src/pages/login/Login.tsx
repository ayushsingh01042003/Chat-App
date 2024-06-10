 import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useNavigate } from "react-router-dom"
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
 
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
})

const Login = () => {

  const navigate = useNavigate();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })
  
  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>)  => {
    const res = await fetch("/api/auth/SignIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: values.username,
        password: values.password,
      }),
    })

    const data = await res.json(); //JWT token
    localStorage.setItem("token", data.token);
    navigate("/home");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter the username" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
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
                <Input type="password" placeholder="Enter the password" {...field} />
              </FormControl>
              <FormDescription>
                This is your private password.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

      <div className="p-2">
        <button onClick={() => navigate('/signup')}>Don't Have an account?</button>
      </div>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default Login