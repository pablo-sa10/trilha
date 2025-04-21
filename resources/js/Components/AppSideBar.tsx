import { useAuthContext } from "@/context/AuthUserContext";
import { Sidebar } from "./ui/sidebar";

export function AppSideBar({...props}: React.Component<typeof Sidebar>){
    const auth = useAuthContext(); // pega as infos do usuario

    return (
        <Sidebar>

        </Sidebar>
    )
}