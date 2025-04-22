import { useState } from "react";
import { useSidebar } from "./ui/sidebar"

type NavUserProps = {
    isNavBar?: boolean
    className?: string
}

export function NavUser({isNavBar, className}: NavUserProps){

    const { isMobile } = useSidebar();
    const [showAlert, setShowAlert] = useState(false);

    return(
        <></>
    )
}