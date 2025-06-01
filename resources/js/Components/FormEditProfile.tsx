import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import InputError from "@/components/InputError";
import { Spinner } from "@/components/ui/spinner";
import { useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useAuthContext } from "@/context/AuthUserContext";
import { Label } from "./ui/label";
import { BackButton } from "./BackButton";

type FormData = {
    name?: string;
    email?: string;
};

export function FormEditPRofile() {
    const auth = useAuthContext();

    const { data, setData, patch, processing, errors, reset } =
        useForm<FormData>({
            name: auth.user?.name,
            email: auth.user?.email,
        });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route("profile.update"));
    };

    return (
        <section>
            <div className="mb-10">
                <BackButton page={"dashboard"} />
            </div>

            <Card className="max-w-2xl mx-auto mb-10">
                <CardHeader>
                    <CardTitle>Editar Perfil</CardTitle>
                </CardHeader>
                <form onSubmit={submit} className="mt-5 space-y-8">
                    <CardContent className="px-8">
                        <div className="grid grid-cols-1 gap-5">
                            <div>
                                <Label className="mb-3 block">Insira um novo nome *</Label>
                                <Input
                                    placeholder="Ex: meu novo nome"
                                    type=""
                                    value={data.name}
                                    onChange={(e) => {
                                        setData("name", e.target.value);
                                    }}
                                />
                                <InputError
                                    className="mt-2"
                                    message={errors.name}
                                />
                            </div>
                            <div>
                                <Label className="mb-3 block">
                                    Insira um novo Email *
                                </Label>
                                <Input
                                    placeholder="Ex: seuNovoEmail@email.com"
                                    type=""
                                    value={data.email}
                                    onChange={(e) => {
                                        setData("email", e.target.value);
                                    }}
                                />
                                <InputError
                                    className="mt-2"
                                    message={errors.email}
                                />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button
                            variant={"success"}
                            type="submit"
                            disabled={processing}
                        >
                            {!processing ? (
                                "Salvar"
                            ) : (
                                <Spinner className="text-black" />
                            )}
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </section>
    );
}
