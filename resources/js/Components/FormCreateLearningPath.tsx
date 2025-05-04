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
import { Card, CardContent } from "./ui/card";
import { Label } from "./ui/label";
import { FormControl, FormDescription, FormMessage } from "./ui/form";
import InputError from "./InputError";
import { error } from "console";
import { BackButton } from "./BackButton";

export function FormCreateLearningPath({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {
    /**
     * HOCK USEFORM NATIVO DO INERTIA QUE FACILITA A VALIDAÇÃO DE DADOS
     *
     */
    const { data, setData, post, processing, errors, reset } = useForm({
        collegeExam: "",
        city: "",
        subject: [],
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("createLearningPath"));
    };

    const academys = [
        {
            label: "Fatec - Faculdade de Tecnologia",
            value: "fatec",
        },
    ];

    return (
        <section>
            <BackButton page={"dashboard"}/>
            <Card>
                <CardContent>
                    <form
                        onSubmit={submit}
                        className="space-y-8 max-w-3xl mx-auto py-10"
                    >
                        <div className="grid gap-6">
                            <Label>Faculdade</Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        className={cn(
                                            "w-[200px] justify-between",
                                            !data.collegeExam &&
                                                "text-muted-foreground"
                                        )}
                                    >
                                        {data.collegeExam
                                            ? academys.find(
                                                  (acad) =>
                                                      acad.value ===
                                                      data.collegeExam
                                              )?.label
                                            : "Selecione o vestibular"}
                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-[200px] p-0">
                                    <Command>
                                        <CommandInput placeholder="Pesquisar Vestibular" />
                                        <CommandList>
                                            <CommandEmpty>
                                                Vestibular não encontrado
                                            </CommandEmpty>
                                            <CommandGroup>
                                                {academys.map((acad) => (
                                                    <CommandItem
                                                        value={acad.label}
                                                        key={acad.value}
                                                        onSelect={() => {
                                                            setData(
                                                                "collegeExam",
                                                                acad.value
                                                            );
                                                        }}
                                                    >
                                                        <Check
                                                            className={cn(
                                                                "mr-2 h-4 w-4",
                                                                acad.value ===
                                                                    data.collegeExam
                                                                    ? "opacity-100"
                                                                    : "opacity-0"
                                                            )}
                                                        />
                                                        {acad.label}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                        </div>

                        {/* <FormDescription>
                        Escolha a faculdade que você pretende se dedicar aos
                        estudos
                    </FormDescription> */}

                        <Label>Cidade</Label>
                        <Input
                            placeholder="Ex: São Paulo"
                            type=""
                            value={data.city}
                            onChange={(e) => {
                                setData("city", e.target.value);
                            }}
                        />
                        <InputError message={errors.city} />

                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-4">
                                <Checkbox
                                    checked={data.subject[0]}
                                    // onCheckedChange={setData("subject")}
                                />

                                <div className="space-y-1 leading-none">
                                    <Label>Matematica</Label>
                                </div>
                            </div>
                        </div>
                        <Button type="submit">Submit</Button>
                    </form>
                </CardContent>
            </Card>
        </section>
    );
}
