"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { User, UserPen } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  function handleClick(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("name"));
    console.log(formData.get("email"));
  }

  const [isTyping, setIsTyping] = useState(false);
  const input = useRef(null);

  function handleIcon() {
    if (input.current) {
      input.current.addEventListener("focus", () => {
        console.log("You are on the input selecting");
        setIsTyping(true);
      });

      input.current.addEventListener("blur", () => {
        console.log("You are not on the input selecting");
        setIsTyping(false);
      });
    }
  }

  return (
    <>
      <div className="flex justify-center">
        <h1 className="bg-gray-400 p-5 w-full text-center">Homepage </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-10 font-semibold mt-10">
        <span>Please fill the form below</span>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Create project{" "}
              {isTyping ? (
                <User className="size-4" />
              ) : (
                <UserPen className="size-4" />
              )}
            </CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    ref={input}
                    id="name"
                    placeholder="Name of your project"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Framework</Label>
                  <Select>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="next">Next.js</SelectItem>
                      <SelectItem value="sveltekit">SvelteKit</SelectItem>
                      <SelectItem value="astro">Astro</SelectItem>
                      <SelectItem value="nuxt">Nuxt.js</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="bg-red-400" onClick={handleIcon}>
              <Button variant="outline">Cancel</Button>
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="bg-slate-600 text-white" variant="outline">
                  Submit
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardFooter>
        </Card>
        <div class="flex gap-10 flex-wrap ">
          <div>
            <img src="https://picsum.photos/300/300" />
            <h4>Rlaaflo</h4>
          </div>
          <div>
            <img src="https://picsum.photos/300/300" />
            <h4>Rlaaflo</h4>
          </div>
          <div>
            <img src="https://picsum.photos/300/300" />
            <h4>Rlaaflo</h4>
          </div>
          <div>
            <img src="https://picsum.photos/300/300" />
            <h4>Rlaaflo</h4>
          </div>
          <div>
            <img src="https://picsum.photos/300/300" />
            <h4>Rlaaflo</h4>
          </div>
          <div>
            <img src="https://picsum.photos/300/300" />
            <h4>Rlaaflo</h4>
          </div>
          <div>
            <img src="https://picsum.photos/300/300" />
            <h4>Rlaaflo</h4>
          </div>
        </div>
      </div>
    </>
  );
}
