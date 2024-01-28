"use client"

import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {Input} from "@/components/ui/input";
import {useLoginStore} from "@/components/login/store";

const formSchema = z.object({
  email: z.string().email("This should be an email address"),
  password: z.string().nonempty("Please enter your password")
})


export default function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  });
  const login = useLoginStore(state => state.login);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(login)} className={"space-y-4"}>
        <div className={"space-y-2"}>
        <FormField
          control={form.control}
          name={"email"}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{"Email"}</FormLabel>
              <FormControl>
                <Input
                  placeholder={"commandercody@foo.nl"}
                  type={"email"}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"password"}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{"Password"}</FormLabel>
              <FormControl>
                <Input
                  type={"password"}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <Button type={"submit"}>Login</Button>
      </form>
    </Form>
  )
}