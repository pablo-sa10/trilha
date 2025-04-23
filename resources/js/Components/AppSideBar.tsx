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
import { NavConfig } from "./NavConfig";
import { NavUser } from "./NavUser";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { user } = useAuthContext(); // pega as infos do usuario

    return (
        <Sidebar variant="inset" collapsible="icon" {...props}>
            <SidebarHeader>
                <NavTitle />
            </SidebarHeader>
            <SidebarContent>
                <ScrollArea>
                    <MainContentSidebar />
                </ScrollArea>
            </SidebarContent>
            <SidebarFooter>
                <NavConfig />
                <NavUser />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
