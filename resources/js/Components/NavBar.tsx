import { useState } from "react"
import { PageProps } from "@/types"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/Components/ui/navigation-menu"
import { LogoIcon } from "./Icons";

interface RouteProps {
  href: string,
  label: string,
}


export function NavBar({ auth }: PageProps) {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log(auth)

  return (
    <header className="sticky z-10 bg-background/95 supports-[backdrop-filter]:bg-background/60 backdrop-blur top-0 flex shrink-0 items-center gap-2 border-b h-16 px-3">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between">
          <NavigationMenuItem className="font-bold flex">
            
            <a
              href=""
              rel=""
              className="ml-2 font-bold text-xl flex"
            >
              <LogoIcon className=" w-6 h-6 text-primary mr-2" />

            </a>
          </NavigationMenuItem>
          
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}
