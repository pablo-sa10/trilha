import * as React from "react";
import { useAuthContext } from "@/context/AuthUserContext";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "./ui/sidebar";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { LogoIcon } from "./Icons";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { user } = useAuthContext(); // pega as infos do usuario

    console.log(user)

    return (
        <Sidebar variant="inset" collapsible="icon" {...props}>
            <SidebarHeader>
                <div className="flex items-center gap-7">
                    <LogoIcon className="w-10 h-10 text-primary" />
                    <div className="flex flex-col">
                        <span className="text-sm text-gray-500">Trilha de estudos</span>
                        <span className="font-bold">Bem vindo, {user?.name}!</span>
                    </div>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <ScrollArea></ScrollArea>
            </SidebarContent>
            <SidebarFooter>usuario</SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
