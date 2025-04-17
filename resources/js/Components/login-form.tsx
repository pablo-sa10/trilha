import { cn } from "@/lib/utils";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Link, useForm } from "@inertiajs/react";
import { toast } from "sonner";
import { useLoginContext } from "@/context/LoginContext";
import { FormEventHandler } from "react";
import ModalAlert from "./ModalAlert";

export function LoginForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"form">) {

    const { title, status, canResetPassword } = useLoginContext(); // variaveis vindo do contexto
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false as boolean,
    });

    // envio do form para o back end
    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password')
        })
    }

    return (
        <>
            <form className={cn("flex flex-col gap-6", className)} {...props}>
                <div className="flex flex-col items-center gap-2 text-center">
                    <h1 className="text-2xl font-bold">Login para a sua conta</h1>
                    <p className="text-balance text-sm text-muted-foreground">
                        Entre com o seu email para acessar sua conta
                    </p>
                </div>
                <div className="grid gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="joao@email.com"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Senha</Label>
                            <Link
                                href={route("password.request")}
                                className="ml-auto text-sm underline-offset-4 hover:underline"
                            >
                                Esqueceu sua senha?
                            </Link>
                        </div>
                        <Input id="password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full">
                        Login
                    </Button>
                    <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                        <span className="relative z-10 bg-background px-2 text-muted-foreground">
                            Ou continue com
                        </span>
                    </div>
                    <Button
                        variant="outline"
                        className="w-full"
                        type="button"
                        onClick={() =>
                            toast("Disponível em breve", {
                                dismissible: true,
                            })
                        }
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                                fill="currentColor"
                            />
                        </svg>
                        Login com Google
                    </Button>
                </div>
                <div className="text-center text-sm">
                    Não tem uma conta?{" "}
                    <Link
                        href={route("register")}
                        className="underline underline-offset-4"
                    >
                        Inscreva-se
                    </Link>
                </div>
            </form>

            {/* modal para exibir mensagem */}
            <ModalAlert title={title} status={status} />
        </>
    );
}
