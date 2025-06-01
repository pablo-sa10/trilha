import { Trophy } from "lucide-react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

interface AdminLayoutProps {
    users: usersProps[];
}

interface usersProps {
    user: {
        id: number;
        name: string;
        email: string;
        email_verified_at?: boolean;
        created_at: string;
        updated_at: string;
    };
    concluidas: number
}

export function AdmPanelLayout({ users, ...props }: AdminLayoutProps) {
    console.log(users);

    return (
        <section className="space-y-16 container mx-auto md:px-16">
            <div className="flex flex-col gap-4">
                <div className="flex justify-center flex-col items-center gap-2">
                    <span className="truncate text-3xl font-bold ">
                        Ranking de estudantes
                    </span>
                    <Trophy className="!w-8 !h-8" />
                </div>
                <span className="text-center truncate text-base text-gray-400 font-semibold">
                    Descubra quem são os alunos mais engajados e veja sua
                    posição na classificação
                </span>
            </div>

            <Table className="">
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Colocação</TableHead>
                        <TableHead>Nome</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead className="w-[150px] text-center">Trilhas concluídas</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((user, key) => (
                        <TableRow key={user.user.name}>
                            <TableCell className="font-medium">
                                #{key + 1}
                            </TableCell>
                            <TableCell>
                                {user.user.name}
                            </TableCell>
                            <TableCell>
                                {user.user.email}
                            </TableCell>
                            <TableCell className="text-right">
                                {user.concluidas}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                
            </Table>
        </section>
    );
}
