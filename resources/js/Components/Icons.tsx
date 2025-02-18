import {
    GraduationCap,
} from "lucide-react"

interface IconProps {
    className? : string
}

export const LogoIcon = ({className}: IconProps) => {
    return <GraduationCap className={className} />

}