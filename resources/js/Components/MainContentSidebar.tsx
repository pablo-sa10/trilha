import { Home, Map, LucideIcon } from "lucide-react";
import { title } from "process";

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
                url: "Trilha 1",
            },
            {
                title: "Trilha 2",
                url: "Trilha 2",
            },
        ],
    },
];

export function MainContentSidebar({}) {
    return <></>;
}
