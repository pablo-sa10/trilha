import * as React from "react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { NavTitle } from "@/components/SideBarMenu/NavTitle";
import { MainContentSidebar } from "@/components/SideBarMenu/MainContentSidebar";
import { NavConfig } from "@/components/SideBarMenu/NavConfig";
import { NavUser } from "@/components/SideBarMenu/NavUser";
import { useAuthContext } from "@/context/AuthUserContext";
import { Link } from "@inertiajs/react";
import { Facebook, ShieldCheck } from "lucide-react";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { user } = useAuthContext(); // pega as infos do usuario

    return (
        <Sidebar variant="floating" collapsible="icon" {...props}>
            <SidebarHeader>
                <NavTitle />
            </SidebarHeader>
            <SidebarContent>
                <ScrollArea>
                    <MainContentSidebar />
                </ScrollArea>
            </SidebarContent>
            <SidebarFooter>
                {user?.roles[0].name == "admin" && (
                    <SidebarMenuButton asChild>
                        <Link href={route("admin.panel")}>
                            <ShieldCheck />
                            <span>Painel Adminitrativo</span>
                        </Link>
                    </SidebarMenuButton>
                )}
                <NavConfig />
                <NavUser />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
