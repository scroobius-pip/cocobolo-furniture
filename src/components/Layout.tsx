import React, { ReactNode } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';


interface Props {
    children: ReactNode
}


export default ({ children }: Props) => {
    return <div className=" m-auto p-36" >
        <NavBar />
        <main className="mt-28" >{children}</main>
        <Footer />
    </div>
}