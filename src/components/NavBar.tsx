import React, { ReactNode } from 'react'
import Logo from './Logo'
import MenuItem from './MenuItem'

export default () => {
    return <nav className="flex justify-between">
        <a href="/">
            <Logo className="h-24" />
        </a>
        <Navigation />
    </nav>
}

const Navigation = () => {
    return <ul>
        <MenuItem to='#catalog' text='Catalog' />
        <MenuItem to='#' text='About' />
        <MenuItem to='#' text='Contact' />

    </ul >
}

