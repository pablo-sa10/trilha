import React from 'react'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { NavUser } from '@/components/SideBarMenu/NavUser';
import { User } from '@/types';
import { ModeToggle } from './ModeToggle';


const Navbar = () => {
    return (
        <header className='sticky z-10 bg-background/95 supports-[backdrop-filter]:bg-background/60 backdrop-blur top-0 flex shrink-0 items-center gap-2 border-b h-16 px-3'>
            <SidebarTrigger />

            <div className='ml-auto flex items-center'>
                <NavUser
                    isNavBar={true}
                    btnClassName="hover:bg-transparent focus-visible:ring-0"
                />
                <ModeToggle />
            </div>
        </header>
    )
}

export default Navbar
