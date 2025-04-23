import { useState } from "react";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "./ui/sidebar"
import { useAuthContext } from "@/context/AuthUserContext";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { ChevronsUpDown } from "lucide-react";

type NavUserProps = {
    isNavBar?: boolean
    btnClassName?: string
}

export function NavUser({isNavBar, btnClassName}: NavUserProps){

    const { isMobile } = useSidebar();
    const [showLougoutAlert, setShowLougoutAlert] = useState(false);
    const { user } = useAuthContext(); // pega as infos do usuario

    function getUserInitial(name: string): string{

        const parts = name.trim().split(" ").filter(Boolean);

        if(parts.length === 1){
            return parts[0].slice(0, 2).toUpperCase()
        }

        return parts[0][0].toLocaleUpperCase() + parts[1][0].toLocaleUpperCase() 
    }

    return(
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                        size="lg"
                         className={cn("data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground", btnClassName)}
                        >
                            <Avatar className="h-8 w-8 rounded-lg">
                                <AvatarFallback className="rounded-lg">{user?.name ? getUserInitial(user.name) : "US"}</AvatarFallback>
                            </Avatar>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-semibold">
                                {user?.name}
                                </span>
                                <span className="truncate text-xs">
                                {user?.email}
                                </span>
                            </div>
                            <ChevronsUpDown className="ml-auto size-4"/>
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[--radiz-dropdown-menu-trigger-width] min-w-56 rounded-lg" side={isMobile || isNavBar ? "bottom" : "right"}
                    align="end"
                    sideOffset={4}
                    >
                        {!isNavBar && (
                            <DropdownMenuLabel>

                            </DropdownMenuLabel>
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}