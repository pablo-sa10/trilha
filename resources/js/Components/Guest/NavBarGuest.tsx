import { useState } from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { LogoIcon } from "@/components/Icons";
import { ModeToggle } from "@/components/ModeToggle";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@inertiajs/react";
import NavLink from "../NavLink";
import { useAuthContext } from "@/context/AuthUserContext";

interface RouteProps {
    href: string;
    label: string;
}

const routeList: RouteProps[] = [
    {
        href: "#features",
        label: "Features",
    },
    {
        href: "#team",
        label: "Team",
    },
    {
        href: "#pricing",
        label: "Pricing",
    },
    {
        href: "#footer",
        label: "FAQ",
    },
];

export function NavBarGuest() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const auth = useAuthContext();

    return (
        <header className="sticky z-10 bg-background/95 supports-[backdrop-filter]:bg-background/60 backdrop-blur top-0 flex shrink-0 items-center gap-2 border-b h-16">
            <NavigationMenu className="mx-auto">
                <NavigationMenuList className="container h-14 md:px-10 px-4 w-screen flex justify-between">
                    <NavigationMenuItem className="font-bold flex">
                        <NavLink
                            href=""
                            rel=""
                            className="ml-2 font-bold text-xl flex items-center gap-4"
                        >
                            <LogoIcon className=" w-10 h-10 text-primary mr-2" />
                            Trilha de Estudos
                        </NavLink>
                    </NavigationMenuItem>

                    {/* MOBILE */}
                    <span className="flex md:hidden">
                        <ModeToggle />

                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger className="px-2">
                                <Menu
                                    className="flex md:hidden h-5 w-5"
                                    onClick={() => setIsOpen(true)}
                                >
                                    <span className="sr-only">Menu Icon</span>
                                </Menu>
                            </SheetTrigger>

                            <SheetContent side={"left"}>
                                <SheetHeader>
                                    <SheetTitle className="font-bold text-xl"></SheetTitle>
                                </SheetHeader>

                                <nav className="flex flex-col justify-center items-center gap-2 mt-2">
                                    {routeList.map(
                                        ({ href, label }: RouteProps) => (
                                            <NavLink
                                                rel="noreferrer"
                                                key={label}
                                                href={href}
                                                onClick={() => setIsOpen(false)}
                                                className={buttonVariants({
                                                    variant: "ghost",
                                                })}
                                            >
                                                {label}
                                            </NavLink>
                                        )
                                    )}

                                    {auth.user ? (
                                        <NavLink
                                            rel=""
                                            href={route("dashboard")}
                                            className={`text-[15px] ${buttonVariants(
                                                { variant: "default" }
                                            )}`}
                                        >
                                            Login
                                        </NavLink>
                                    ) : (
                                        <>
                                            <NavLink
                                                rel=""
                                                href={route("login")}
                                                key={"login"}
                                                className={`text-[15px] ${buttonVariants(
                                                    { variant: "default" }
                                                )}`}
                                            >
                                                Login
                                            </NavLink>
                                            <NavLink
                                                rel=""
                                                href={route("register")}
                                                key={"register"}
                                                className={`text-[15px] ${buttonVariants(
                                                    { variant: "outline" }
                                                )}`}
                                            >
                                                Inscreva-se
                                            </NavLink>
                                        </>
                                    )}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </span>

                    {/* DESKTOP */}
                    <nav className="hidden md:flex gap-2">
                        {routeList.map((route: RouteProps) => (
                            <NavLink
                                rel="noreferrer"
                                href={route.href}
                                key={route.label}
                                className={`text-[15px] ${buttonVariants({
                                    variant: "ghost",
                                })}`}
                            >
                                {route.label}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="hidden md:flex gap-5">
                        {auth.user ? (
                            <NavLink
                                rel=""
                                href={route("dashboard")}
                                key={"login"}
                                className={`text-[15px] ${buttonVariants({
                                    variant: "default",
                                })}`}
                            >
                                Login
                            </NavLink>
                        ) : (
                            <div className="flex gap-2">
                                <NavLink
                                    rel=""
                                    href={route("login")}
                                    key={"login"}
                                    className={`text-[15px] ${buttonVariants({
                                        variant: "default",
                                    })}`}
                                >
                                    Login
                                </NavLink>
                                <NavLink
                                    rel=""
                                    href={route("register")}
                                    key={"register"}
                                    className={`text-[15px] ${buttonVariants({
                                        variant: "outline",
                                    })}`}
                                >
                                    Inscreva-se
                                </NavLink>
                            </div>
                        )}
                        <ModeToggle />
                    </div>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    );
}
