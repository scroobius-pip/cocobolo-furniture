import React from 'react'
import { Small } from '../Text'

interface Props {
    label: string
    [props: string]: any
}

const TextInput = (props: Props) => {
    return <>
        <div>
            <label className='block' htmlFor={props.label}><Small>{props.label}</Small></label>
            <input
                id={props.label}
                {...props}
                className={`outline-none text-black transition-all  focus-within:opacity-100 w-full bg-transparent border-b-4 font-medium text-lg p-1 pl-0  border-black ${props?.className}`}
                placeholder='Hello'
                spellCheck={false}
            />

        </div>

    </>
}

export { TextInput }