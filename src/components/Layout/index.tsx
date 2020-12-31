import React, { ReactNode } from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';
import styles from './index.module.css'

interface Props {
    children: ReactNode
}


export default ({ children }: Props) => {
    return <div className={`m-auto p-4 md:p-24 lg:p-36 grid min-h-full ${styles.layout}`} >
        <NavBar />
        <main className="mt-28" >{children}</main>
        <footer className={styles.footer}>
            <Footer />
        </footer>
    </div>
}