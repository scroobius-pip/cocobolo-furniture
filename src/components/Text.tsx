import React, { ReactNode, } from 'react'

interface Props {
    children: ReactNode
    className?: string
}


export const Medium = ({ children, className }: Props) => {
    return <span className={`text-xl  ${className}`}>
        {children}
    </span>
}

export const Small = ({ children, className }: Props) => {
    return <span className={`text-lg  ${className}`}>
        {children}
    </span>
}