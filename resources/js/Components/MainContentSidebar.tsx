import { Home, Map, LucideIcon, ChevronRight, Plus } from "lucide-react";

import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "./ui/sidebar";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "./ui/collapsible";
import { Link } from "@inertiajs/react";
import { useLearningPathContext } from "@/context/LearningPathsContext";

interface itensMenuProps {
    title: string;
    url?: string;
    icon?: LucideIcon;
    collapsible: boolean;
    isActive?: boolean;
    items?: {
        title: string;
        url: string;
    }[];
}
[];

const itensMenu = [
    {
        title: "Home",
        url: "dashboard",
        icon: Home,
        collapsible: false,
    },
    {
        title: "Minhas Trilhas",
        icon: Map,
        collapsible: true,
        isActive: true,
        items: [
            {
                title: "Trilha 1",
                url: "ladingPage",
            },
            {
                title: "Trilha 2",
                url: "ladingPage",
            },
        ],
    },
    {
        title: "Adicionar Trilha",
        url: "new-learning-path.create",
        icon: Plus,
        collapsible: false,
    },
];

export function MainContentSidebar({ }) {

    const {trilhas} = useLearningPathContext();

    console.log(trilhas)

    return (
        <SidebarGroup>
            <SidebarGroupLabel>Plataforma</SidebarGroupLabel>
            <SidebarMenu className="gap-3">
                {itensMenu.map((item: itensMenuProps) => {
                    return item.collapsible ? (
                        <Collapsible
                            key={item.title}
                            asChild
                            defaultOpen={item.isActive}
                            className="group/collapsible"
                        >
                            <SidebarMenuItem>
                                <CollapsibleTrigger asChild>
                                    <SidebarMenuButton tooltip={item.title}>
                                        {item.icon && <item.icon />}
                                        <span>{item.title}</span>
                                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                    </SidebarMenuButton>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    <SidebarMenuSub>
                                        {item.items?.map((subItem) => (
                                            <SidebarMenuSubItem
                                                key={subItem.title}
                                            >
                                                <SidebarMenuSubButton asChild>
                                                    <Link
                                                        href={route(
                                                            subItem.url
                                                        )}
                                                    >
                                                        <span>
                                                            {subItem.title}
                                                        </span>
                                                    </Link>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        ))}
                                    </SidebarMenuSub>
                                </CollapsibleContent>
                            </SidebarMenuItem>
                        </Collapsible>
                    ) : (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild>
                                <Link
                                    href={route(item.url || "ladingPage")}
                                    >
                                    {item.icon && <item.icon />}
                                    <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    );
                })}
            </SidebarMenu>
        </SidebarGroup>
    );
}
