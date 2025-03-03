import { InertiaLinkProps, Link } from '@inertiajs/react';

export default function NavLink({
    children,
    ...props
}: InertiaLinkProps) {
    return (
        <Link
            {...props}
        >
            {children}
        </Link>
    );
}
