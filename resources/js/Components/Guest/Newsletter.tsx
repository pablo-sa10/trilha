import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"

export const Newsletter = () => {
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("Subscribed");
    };

    return (
        <section id="newsletter">
            <hr className="" />
        </section>
    )
}