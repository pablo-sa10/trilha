import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar"
import { Badge } from "./ui/badge"
import { Button, buttonVariants } from "./ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/Components/ui/card"
import { Check, Linkedin } from "lucide-react";

export const HeroCards = () => {
    return (
        <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
            {/* TESTIMONIAL */}
            <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Avatar>
                        <AvatarImage 
                            alt=""
                            src="https://github.com/pablo-sa10.png"
                        />
                        <AvatarFallback>PM</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                        <CardTitle className="text-lg">
                            Pablo do React
                        </CardTitle>
                        <CardDescription>pablomoura2016@gmail.com</CardDescription>
                    </div>

                </CardHeader>

                <CardContent>This landing page is awesome!</CardContent>
            </Card>
        </div>
    )
}