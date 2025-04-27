import { useState } from "react";
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "./ui/sidebar";
import { useAuthContext } from "@/context/AuthUserContext";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuItem,
} from "./ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Bell, ChevronsUpDown, LogOut } from "lucide-react";
import { toast } from "sonner";
import { ModalAlert } from "./modal/ModalAlert";
import { router } from "@inertiajs/react";

type NavUserProps = {
    isNavBar?: boolean;
    btnClassName?: string;
};

export function NavUser({ isNavBar, btnClassName }: NavUserProps) {
    const { isMobile } = useSidebar();
    const [showLougoutAlert, setShowLougoutAlert] = useState(false);
    const { user } = useAuthContext(); // pega as infos do usuario

    function getUserInitial(name: string): string {
        const parts = name.trim().split(" ").filter(Boolean);

        if (parts.length === 1) {
            return parts[0].slice(0, 2).toUpperCase();
        }

        return (
            parts[0][0].toLocaleUpperCase() + parts[1][0].toLocaleUpperCase()
        );
    }

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size="lg"
                            className={cn(
                                "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
                                btnClassName
                            )}
                        >
                            <Avatar className="h-8 w-8 rounded-lg">
                                <AvatarFallback className="rounded-lg">
                                    {user?.name
                                        ? getUserInitial(user.name)
                                        : "US"}
                                </AvatarFallback>
                            </Avatar>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-semibold">
                                    {user?.name}
                                </span>
                                <span className="truncate text-xs">
                                    {user?.email}
                                </span>
                            </div>
                            <ChevronsUpDown className="ml-auto size-4" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-[--radiz-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                        side={isMobile || isNavBar ? "bottom" : "right"}
                        align="end"
                        sideOffset={4}
                    >
                        {!isNavBar && (
                            <DropdownMenuLabel>
                                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                    <Avatar className="h-8 w-8 rounded-lg">
                                        <AvatarFallback className="rounded-lg">
                                            {user?.name
                                                ? getUserInitial(user.name)
                                                : "US"}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-semibold">
                                            {user?.name}
                                        </span>
                                        <span className="truncate text-xs">
                                            {user?.email}
                                        </span>
                                    </div>
                                </div>
                            </DropdownMenuLabel>
                        )}
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem
                                onClick={() => {
                                    toast("Disponível em breve", {
                                        dismissible: true,
                                    });
                                }}
                            >
                                <Bell />
                                Notificação
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            // onClick={() => setShowLougoutAlert(true)}
                            onClick={() => router.post(route('logout'))}
                        >
                            <LogOut />
                            Sair
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>

            {/* <ModalAlert
                open={showLougoutAlert}
                onOpenChange={setShowLougoutAlert}
                title="Você tem certeza?"
                description="Deseja realmente sair da sessão?"
                classBtnConfirm="bg-destructive hover:bg-destructive/80"
            /> */}
        </SidebarMenu>
    );
}
