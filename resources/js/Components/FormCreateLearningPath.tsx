"use client";

import { useForm } from "@inertiajs/react";
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
import { Check, ChevronsUpDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { FormEventHandler } from "react";
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

interface AcademysProps {
    label: string;
    value: string;
}

export function FormCreateLearningPath({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {
    /**
     * HOCK USEFORM NATIVO DO INERTIA QUE FACILITA A VALIDAÇÃO DE DADOS
     *
     */
    type FormData = {
        collegeExam: string;
        learningPath: string;
        city: string;
        subject: string[];
    };
    const { data, setData, post, processing, errors, reset } =
        useForm<FormData>({
            collegeExam: "",
            learningPath: "",
            city: "",
            subject: [],
        });

    console.log(data);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("createLearningPath"));
    };

    const academys: AcademysProps[] = [
        {
            label: "Fatec - Faculdade de Tecnologia",
            value: "fatec",
        },
    ];

    const subjects: string[] = [
        "Matemática",
        "Português",
        "Física",
        "Química",
        "História",
        "Geografia",
        "Inglês",
        "Raciocínio Lógico",
        "Conteúdo Multidisciplinar",
    ];

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
                        <div className="grid grid-cols-1 mb-5">
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
                                                !data.collegeExam &&
                                                    "text-muted-foreground"
                                            )}
                                        >
                                            {data.collegeExam
                                                ? academys.find(
                                                      (acad) =>
                                                          acad.label ===
                                                          data.collegeExam
                                                  )?.label
                                                : "Selecione o vestibular"}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent
                                        className="w-[265px] md:w-[700px] p-0"
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
                                                            value,
                                                        }: AcademysProps) => (
                                                            <CommandItem
                                                                value={label}
                                                                key={value}
                                                                onSelect={() => {
                                                                    setData(
                                                                        "collegeExam",
                                                                        label
                                                                    );
                                                                }}
                                                            >
                                                                <Check
                                                                    className={cn(
                                                                        "mr-2 h-4 w-4",
                                                                        label ===
                                                                            data.collegeExam
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
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <Label className="mb-3 block">
                                    Nome da Trilha *
                                </Label>
                                <Input
                                    placeholder="Ex: Minha Trilha"
                                    type=""
                                    value={data.learningPath}
                                    onChange={(e) => {
                                        setData("learningPath", e.target.value);
                                    }}
                                />
                                <InputError message={errors.learningPath} />
                            </div>
                            <div>
                                <Label className="mb-3 block">Cidade *</Label>
                                <Input
                                    placeholder="Ex: São Paulo"
                                    type=""
                                    value={data.city}
                                    onChange={(e) => {
                                        setData("city", e.target.value);
                                    }}
                                />
                                <InputError message={errors.city} />
                            </div>
                        </div>

                        <div className="mt-16 space-y-7">
                            <CardDescription>
                                Selecione as matérias em que você tem mais
                                dificuldade e gostaria de melhorar seu
                                desempenho.
                            </CardDescription>
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-8">
                                {subjects.map((sub: string) => (
                                    <div key={sub} className="flex gap-2">
                                        <Checkbox
                                            checked={data.subject.includes(sub)}
                                            onCheckedChange={(checked) => {
                                                if (checked) {
                                                    setData("subject", [
                                                        ...data.subject,
                                                        sub,
                                                    ]);
                                                } else {
                                                    setData(
                                                        "subject",
                                                        data.subject.filter(
                                                            (s) => s !== sub
                                                        )
                                                    );
                                                }
                                            }}
                                        />

                                        <div className="space-y-1 leading-none">
                                            <Label>{sub}</Label>
                                        </div>
                                        <InputError message={errors.subject} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit">Enviar</Button>
                    </CardFooter>
                </form>
            </Card>
        </section>
    );
}
