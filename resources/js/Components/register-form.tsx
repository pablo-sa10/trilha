import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { FormEventHandler, useState } from "react";
import { Link, useForm } from "@inertiajs/react";
import ResetPassword from "@/Pages/Auth/ResetPassword";
import InputError from "./InputError";
import { Spinner } from "./ui/spinner";

export function LoginForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {
    /**
     * HOCK USEFORM NATIVO DO INERTIA QUE FACILITA A VALIDAÇÃO DE DADOS
     *
     */
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    console.log(data);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    // função para exibir spinner e trocar o nome
    // PRECISO TERMINAR DE CORRIGIR !!!
    const [textLogin, setTextLogin] = useState("Registrar");
    const SpinnerToggle = () => {
        const [show, setShow] = useState(false);
    };

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Bem vindo!</CardTitle>
                    <CardDescription>
                        Login com sua conta Google
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={submit}>
                        <div className="grid gap-6">
                            <div className="flex flex-col gap-4">
                                <Button variant="outline" className="w-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    Registre com sua conta Google
                                </Button>
                            </div>
                            <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                                <span className="relative z-10 bg-background px-2 text-muted-foreground">
                                    Ou
                                </span>
                            </div>
                            <div className="grid gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Nome</Label>
                                    <Input
                                        id="name"
                                        value={data.name}
                                        onChange={(e) => {
                                            setData("name", e.target.value);
                                        }}
                                        autoComplete="name"
                                        placeholder="Seu nome"
                                        required
                                    />
                                    <InputError
                                        message={errors.name}
                                        className="mt-1"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={data.email}
                                        autoComplete="username"
                                        onChange={(e) => {
                                            setData("email", e.target.value);
                                        }}
                                        placeholder="nome@email.com"
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="password">Senha</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        value={data.password}
                                        onChange={(e) => {
                                            setData("password", e.target.value);
                                        }}
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="password_confirmation">
                                        Confirme a senha
                                    </Label>
                                    <Input
                                        id="password_confirmation"
                                        type="password"
                                        value={data.password_confirmation}
                                        onChange={(e) => {
                                            setData(
                                                "password_confirmation",
                                                e.target.value
                                            );
                                        }}
                                        required
                                    />
                                </div>
                                <div className="grid gap-3 mt-3">
                                    <Button type="submit" className="w-full">
                                        {textLogin}
                                    </Button>
                                    <Link
                                        href="/"
                                        className={buttonVariants({
                                            variant: "destructive",
                                        })}
                                    >
                                        Voltar
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
            <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
                By clicking continue, you agree to our{" "}
                <a href="#">Terms of Service</a> and{" "}
                <a href="#">Privacy Policy</a>.
            </div>
        </div>
    );
}
