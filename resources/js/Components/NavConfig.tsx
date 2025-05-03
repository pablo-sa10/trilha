import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "./ui/sidebar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
    ChevronsUpDown,
    Key,
    LucideIcon,
    Settings,
    UserPen,
} from "lucide-react";
import { Link } from "@inertiajs/react";
import { ModeToggle } from "./ModeToggle";

interface ConfigsProps {
    name: string;
    url?: string;
    icon: LucideIcon;
}
[];

const configItems = [
    {
        name: "Editar Perfil",
        url: "dashboard",
        icon: UserPen,
    },
];

export function NavConfig() {
    const { isMobile } = useSidebar();

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton>
                            <Settings className="" />
                            <span className="truncate text-xs">
                                Configurações
                            </span>
                            <ChevronsUpDown className="ml-auto" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                        align="end"
                        side={isMobile ? "bottom" : "right"}
                        sideOffset={4}
                    >
                        {configItems.map((item, index) => (
                            <DropdownMenuItem
                                key={item.name}
                                className="gap-2 p-2 cursor-pointer"
                                asChild
                            >
                                <Link
                                    href={route(item.url || "dashboard")}
                                    className="gap-2"
                                >
                                    <div className="flex size-6 items-center justify-center rounded-sm border">
                                        <item.icon className="size-4 shrink-0" />
                                    </div>
                                    {item.name}
                                </Link>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}
