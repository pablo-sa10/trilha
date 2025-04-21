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
import { NavTitle } from "./NavTitle";
import { MainContentSidebar } from "./MainContentSidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { user } = useAuthContext(); // pega as infos do usuario

    return (
        <Sidebar variant="inset" collapsible="icon" {...props}>
            <SidebarHeader>
                <NavTitle/>
            </SidebarHeader>
            <SidebarContent>
                <ScrollArea>
                    <MainContentSidebar />
                </ScrollArea>
            </SidebarContent>
            <SidebarFooter>usuario</SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
