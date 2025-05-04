import { AppSidebar } from "@/components/AppSideBar";
import Navbar from "@/components/NavBar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";


export function MainMenu({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <Navbar />
                <main className="p-5">{children}</main>
            </SidebarInset>
        </SidebarProvider>
    );
}
