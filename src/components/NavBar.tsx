import React, { ReactNode } from 'react'
import Logo from './Logo'

export default () => {
    return <nav className="flex justify-between">
        <a href="#">
            <Logo className="h-24" />
        </a>
        <Navigation />
    </nav>
}

const Navigation = () => {
    return <ul>
        <NavMenuItem to='#' text='Popular' />
        <NavMenuItem to='#catalog' text='Catalog' />
        <NavMenuItem to='#' text='About' />
        <NavMenuItem to='#' text='Contact' />

    </ul >
}

const NavMenuItem = ({ text, to }: { text: string, to: string }) => {
    return <li className="hover:text-wine hover">
        <a className='font-medium' href={to}>{text}</a>
    </li>
}