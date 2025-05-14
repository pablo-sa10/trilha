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
    items?: LearningPath[];
}
[];

interface LearningPath {
    id: number;
    title: string;
    url: string;
}

export function MainContentSidebar({ }) {

    const { trilhas } = useLearningPathContext();

    let itens = [] as LearningPath[];

    trilhas.map((trilha) => {
        itens.push({
            id: trilha.id_trilha,
            title: trilha.nome_trilha,
            url: route('new-learning-path.show', { id: trilha.id_trilha }),
        });
    });

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
            items: itens,
        },
        {
            title: "Adicionar Trilha",
            url: "new-learning-path.create",
            icon: Plus,
            collapsible: false,
        },
    ];

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
                                        {item.items && item.items.length > 0 ? (
                                            item.items.map((subItem) => (
                                                <SidebarMenuSubItem
                                                    key={subItem.id}
                                                >
                                                    <SidebarMenuSubButton asChild>
                                                        <Link
                                                            href={subItem.url}
                                                        >
                                                            <span>
                                                                {subItem.title}
                                                            </span>
                                                        </Link>
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                            ))
                                        ) : (
                                            <div className="flex items-center justify-center w-full h-full">
                                                <p className="text-sm text-gray-500">
                                                    Nenhuma trilha encontrada.
                                                </p>
                                            </div>
                                        )}
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
