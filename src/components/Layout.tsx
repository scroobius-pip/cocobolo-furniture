import React, { ReactNode } from 'react';
import NavBar from './NavBar';

interface Props {
    children: ReactNode
}


export default ({ children }: Props) => {
    return <div className=" m-auto p-16" >

        <NavBar />

        <main className="mt-28" >{children}</main>
        <footer>

        </footer>
    </div>
}