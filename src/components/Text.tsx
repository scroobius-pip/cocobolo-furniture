import React, { ReactNode, } from 'react'

interface Props {
    children: ReactNode
    className?: string

}


export const Medium = ({ children, className }: Props) => {
    return <h3 className={`text-xl  ${className}`}>
        {children}
    </h3>
}