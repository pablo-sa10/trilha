import { AppSidebar } from "@/Components/AppSideBar";
import Navbar from "@/Components/NavBar";
import { SidebarInset, SidebarProvider } from "@/Components/ui/sidebar";
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
