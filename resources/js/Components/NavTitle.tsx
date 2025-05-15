import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import { LogoIcon } from "./Icons";
import { useAuthContext } from "@/context/AuthUserContext";

export function NavTitle() {
    const { user } = useAuthContext(); // pega as infos do usuario

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton
                    size="lg"
                    className="group cursor-default flex items-center gap-3 px-3 py-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                >
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                        <LogoIcon />
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight transition-all duration-200 ease-in-out sidebar-open:opacity-100 sidebar-closed:opacity-0 sidebar-closed:w-0 overflow-hidden">
                        <span className="truncate text-sm text-gray-400 font-semibold">
                            Trilha de Estudos
                        </span>
                        <span className="truncate text-base font-bold">
                            Bem vindo, {user?.name.split(" ")[0]}!
                        </span>
                    </div>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}
