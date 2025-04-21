export interface Role {
    id: number;
    name: string;
    guard_name: string;
    created_at: string;
    updated_at: string;
    pivot?: {
        model_type: string;
        model_id: number;
        role_id: number;
    };
}

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    updated_at: string;
    roles: Role[];
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
};
