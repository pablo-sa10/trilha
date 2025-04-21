import { AppSidebar } from "@/Components/AppSideBar";
import { SidebarInset, SidebarProvider } from "@/Components/ui/sidebar";
import React, { HTMLAttributes } from "react";

interface MainMenuProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function MainMenu({ children, ...props }: MainMenuProps) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <main className="p-5">{children}</main>
            </SidebarInset>
        </SidebarProvider>
    );
}
