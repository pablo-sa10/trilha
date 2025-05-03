"use client";

import { useForm } from "@inertiajs/react";
import { cn } from "@/lib/utils";
import { Button } from "@/Components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/Components/ui/form";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/Components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { Input } from "@/Components/ui/input";
import { Checkbox } from "@/Components/ui/checkbox";

export function FormCreateLearningPath({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {
    /**
     * HOCK USEFORM NATIVO DO INERTIA QUE FACILITA A VALIDAÇÃO DE DADOS
     *
     */
    const {data, setData, post, processing, errors, reset} = useForm({
        academy: "",

    })
    const academy = [
        {
            label: "Fatec - Faculdade de Tecnonlogia",
            value: "fa",
        },
    ];

    // function onSubmit(values: z.infer<typeof formSchema>) {
    //     try {
    //         console.log(values);
    //         toast(
    //             <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //                 <code className="text-white">
    //                     {JSON.stringify(values, null, 2)}
    //                 </code>
    //             </pre>
    //         );
    //     } catch (error) {
    //         console.error("Form submission error", error);
    //         toast.error("Failed to submit the form. Please try again.");
    //     }
    // }

    return (
        <></>
        // <Form {...form}>
        //     <form
        //         onSubmit={form.handleSubmit(onSubmit)}
        //         className="space-y-8 max-w-3xl mx-auto py-10"
        //     >
        //         <FormField
        //             control={form.control}
        //             name="name_8713553238"
        //             render={({ field }) => (
        //                 <FormItem className="flex flex-col">
        //                     <FormLabel>Faculdade</FormLabel>
        //                     <Popover>
        //                         <PopoverTrigger asChild>
        //                             <FormControl>
        //                                 <Button
        //                                     variant="outline"
        //                                     role="combobox"
        //                                     className={cn(
        //                                         "w-[200px] justify-between",
        //                                         !field.value &&
        //                                             "text-muted-foreground"
        //                                     )}
        //                                 >
        //                                     {field.value
        //                                         ? languages.find(
        //                                               (language) =>
        //                                                   language.value ===
        //                                                   field.value
        //                                           )?.label
        //                                         : "Select language"}
        //                                     <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        //                                 </Button>
        //                             </FormControl>
        //                         </PopoverTrigger>
        //                         <PopoverContent className="w-[200px] p-0">
        //                             <Command>
        //                                 <CommandInput placeholder="Search language..." />
        //                                 <CommandList>
        //                                     <CommandEmpty>
        //                                         No language found.
        //                                     </CommandEmpty>
        //                                     <CommandGroup>
        //                                         {languages.map((language) => (
        //                                             <CommandItem
        //                                                 value={language.label}
        //                                                 key={language.value}
        //                                                 onSelect={() => {
        //                                                     form.setValue(
        //                                                         "name_8713553238",
        //                                                         language.value
        //                                                     );
        //                                                 }}
        //                                             >
        //                                                 <Check
        //                                                     className={cn(
        //                                                         "mr-2 h-4 w-4",
        //                                                         language.value ===
        //                                                             field.value
        //                                                             ? "opacity-100"
        //                                                             : "opacity-0"
        //                                                     )}
        //                                                 />
        //                                                 {language.label}
        //                                             </CommandItem>
        //                                         ))}
        //                                     </CommandGroup>
        //                                 </CommandList>
        //                             </Command>
        //                         </PopoverContent>
        //                     </Popover>
        //                     <FormDescription>
        //                         Escolha a faculdade que você pretende se dedicar
        //                         aos estudos
        //                     </FormDescription>
        //                     <FormMessage />
        //                 </FormItem>
        //             )}
        //         />

        //         <FormField
        //             control={form.control}
        //             name="name_7375121613"
        //             render={({ field }) => (
        //                 <FormItem>
        //                     <FormLabel>Cidade</FormLabel>
        //                     <FormControl>
        //                         <Input
        //                             placeholder="Ex: São Paulo"
        //                             type=""
        //                             {...field}
        //                         />
        //                     </FormControl>

        //                     <FormMessage />
        //                 </FormItem>
        //             )}
        //         />

        //         <div className="grid grid-cols-12 gap-4">
        //             <div className="col-span-4">
        //                 <FormField
        //                     control={form.control}
        //                     name="name_3571387322"
        //                     render={({ field }) => (
        //                         <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
        //                             <FormControl>
        //                                 <Checkbox
        //                                     checked={field.value}
        //                                     onCheckedChange={field.onChange}
        //                                 />
        //                             </FormControl>
        //                             <div className="space-y-1 leading-none">
        //                                 <FormLabel>Matematica</FormLabel>

        //                                 <FormMessage />
        //                             </div>
        //                         </FormItem>
        //                     )}
        //                 />
        //             </div>

        //             <div className="col-span-4">
        //                 <FormField
        //                     control={form.control}
        //                     name="name_4598619804"
        //                     render={({ field }) => (
        //                         <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
        //                             <FormControl>
        //                                 <Checkbox
        //                                     checked={field.value}
        //                                     onCheckedChange={field.onChange}
        //                                 />
        //                             </FormControl>
        //                             <div className="space-y-1 leading-none">
        //                                 <FormLabel>Português</FormLabel>

        //                                 <FormMessage />
        //                             </div>
        //                         </FormItem>
        //                     )}
        //                 />
        //             </div>

        //             <div className="col-span-4">
        //                 <FormField
        //                     control={form.control}
        //                     name="name_8967988399"
        //                     render={({ field }) => (
        //                         <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
        //                             <FormControl>
        //                                 <Checkbox
        //                                     checked={field.value}
        //                                     onCheckedChange={field.onChange}
        //                                 />
        //                             </FormControl>
        //                             <div className="space-y-1 leading-none">
        //                                 <FormLabel>Teste</FormLabel>

        //                                 <FormMessage />
        //                             </div>
        //                         </FormItem>
        //                     )}
        //                 />
        //             </div>
        //         </div>

        //         <div className="grid grid-cols-12 gap-4">
        //             <div className="col-span-6">
        //                 <FormField
        //                     control={form.control}
        //                     name="name_3352954929"
        //                     render={({ field }) => (
        //                         <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
        //                             <FormControl>
        //                                 <Checkbox
        //                                     checked={field.value}
        //                                     onCheckedChange={field.onChange}
        //                                 />
        //                             </FormControl>
        //                             <div className="space-y-1 leading-none">
        //                                 <FormLabel>teste</FormLabel>

        //                                 <FormMessage />
        //                             </div>
        //                         </FormItem>
        //                     )}
        //                 />
        //             </div>

        //             <div className="col-span-6">
        //                 <FormField
        //                     control={form.control}
        //                     name="name_9025514239"
        //                     render={({ field }) => (
        //                         <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
        //                             <FormControl>
        //                                 <Checkbox
        //                                     checked={field.value}
        //                                     onCheckedChange={field.onChange}
        //                                 />
        //                             </FormControl>
        //                             <div className="space-y-1 leading-none">
        //                                 <FormLabel>teste</FormLabel>

        //                                 <FormMessage />
        //                             </div>
        //                         </FormItem>
        //                     )}
        //                 />
        //             </div>
        //         </div>
        //         <Button type="submit">Submit</Button>
        //     </form>
        // </Form>
    );
}
