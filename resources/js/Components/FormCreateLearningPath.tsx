"use client";

import { useForm, usePage } from "@inertiajs/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown, Scroll } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { FormEventHandler, useEffect, useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";
import InputError from "./InputError";
import { BackButton } from "./BackButton";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";
import { ScrollArea } from "./ui/scroll-area";
import { Spinner } from "./ui/spinner";
import { ModalInfo } from "./modal/ModalInfo";

interface AcademysProps {
    label: string;
    id: number;
}

interface SubjectsProps {
    id_materia: number;
    nome: string;
}

export function FormCreateLearningPath({
    className,
    subjects,
    ...props
}: {
    className?: React.ComponentPropsWithoutRef<"div">,
    subjects: SubjectsProps[]
}) {

    const academys: AcademysProps[] = [ // vestibulares disponíveis
        {
            label: "Fatec - Faculdade de Tecnologia - 1/2024",
            id: 1,
        },
        {
            label: "Fatec - Faculdade de Tecnologia - 2/2024",
            id: 2,
        }
    ];

    // const {errors} = usePage().props; // pegando os erros do back end
    /**
     * HOCK USEFORM NATIVO DO INERTIA QUE FACILITA A VALIDAÇÃO DE DADOS
     *
     */
    type FormData = {
        vestibular: number;
        name: string;
        materia: string;
        erro?: string;
    };

    const { data, setData, post, processing, errors, reset } =
        useForm<FormData>({
            vestibular: 0,
            name: "",
            materia: "",
        });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("new-learning-path.store"));
    };

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const hasValidationErrors =
            !!errors.name || !!errors.materia || !!errors.vestibular;

        if (errors.erro && !hasValidationErrors) {
            setShowModal(true);
        }
    }, [errors]);

    return (
        <section className="" {...props}>
            <div className="mb-10">
                <BackButton page={"dashboard"} />
            </div>

            <Card className="max-w-3xl mx-auto mb-10">
                <CardHeader>
                    <CardTitle>Criar Trilha de Estudos</CardTitle>
                    <CardDescription>
                        Preencha as informações abaixo para gerar seu plano de
                        estudos personalizado.
                    </CardDescription>
                </CardHeader>
                <form onSubmit={submit} className="space-y-8">
                    <CardContent className="px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <Label className="mb-3 block">
                                    Vestibular *
                                </Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            className={cn(
                                                "w-full justify-between",
                                                !data.vestibular &&
                                                "text-muted-foreground",
                                                "truncate"
                                            )}
                                        >
                                            {data.vestibular
                                                ? academys.find(
                                                    (acad) =>
                                                        acad.id ===
                                                        data.vestibular
                                                )?.label
                                                : "Selecione o vestibular"}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent
                                        className="w-[300px] md:w-[350px] p-0"
                                        align="start"
                                        sideOffset={4}
                                    >
                                        <Command>
                                            <CommandInput placeholder="Pesquisar Vestibular" />
                                            <CommandList>
                                                <CommandEmpty>
                                                    Vestibular não encontrado
                                                </CommandEmpty>
                                                <CommandGroup>
                                                    {academys.map(
                                                        ({
                                                            label,
                                                            id,
                                                        }: AcademysProps) => (
                                                            <CommandItem
                                                                value={label}
                                                                key={label}
                                                                onSelect={() => {
                                                                    setData(
                                                                        "vestibular",
                                                                        id
                                                                    );
                                                                }}
                                                            >
                                                                <Check
                                                                    className={cn(
                                                                        "mr-2 h-4 w-4",
                                                                        id ===
                                                                            data.vestibular
                                                                            ? "opacity-100"
                                                                            : "opacity-0"
                                                                    )}
                                                                />
                                                                {label}
                                                            </CommandItem>
                                                        )
                                                    )}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                                <InputError className="mt-2" message={errors.vestibular} />
                            </div>
                            <div>
                                <Label className="mb-3 block">
                                    Nome da Trilha *
                                </Label>
                                <Input
                                    placeholder="Ex: Minha Trilha"
                                    type=""
                                    value={data.name}
                                    onChange={(e) => {
                                        setData("name", e.target.value);
                                    }}
                                />
                                <InputError className="mt-2" message={errors.name} />
                            </div>
                        </div>

                        <div className="mt-16 space-y-7">
                            <CardDescription>
                                Selecione a matéria que você deseja estudar nessa trilha.
                            </CardDescription>
                            <div className="w-full">
                                <Select onValueChange={(value) => setData("materia", value)}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Selecione a matéria" />
                                    </SelectTrigger>
                                    <SelectContent side="bottom" align="start">
                                        <ScrollArea className="h-60"> {/* define a altura máxima */}
                                            <SelectGroup>
                                                <SelectLabel>Matéria</SelectLabel>
                                                {subjects.map((sub) => (
                                                    <SelectItem
                                                        key={sub.id_materia}
                                                        value={sub.id_materia.toString()}
                                                    >
                                                        {sub.nome}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </ScrollArea>
                                    </SelectContent>
                                </Select>
                                <InputError className="mt-2" message={errors.materia} />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button
                            type="submit"
                            disabled={processing}
                        >
                            {!processing ? "Enviar" : <Spinner className="text-black" />}
                        </Button>
                    </CardFooter>
                </form>
            </Card>

            {showModal && (
                <ModalInfo
                    open={showModal}
                    onClose={() => setShowModal(false)}
                    title="Erro!"
                    description={errors.erro}
                />
            )}

        </section>
    );
}
