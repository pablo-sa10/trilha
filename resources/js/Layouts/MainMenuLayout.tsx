import { SidebarProvider } from "@/Components/ui/sidebar";
import React, { HTMLAttributes } from "react";

interface MainMenuProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function MainMenu({ children, ...props }: MainMenuProps) {
    <SidebarProvider>
        
    </SidebarProvider>;
}
