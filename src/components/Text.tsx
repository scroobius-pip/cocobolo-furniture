import React, { ReactNode, } from 'react'

interface Props {
    children: ReactNode
    className?: string
}




export const XLarge = ({ children, className }: Props) => {
    return <span className={`text-5xl  ${className}`}>
        {children}
    </span>
}
export const Large = ({ children, className }: Props) => {
    return <span className={`text-3xl  ${className}`}>
        {children}
    </span>
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