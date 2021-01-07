import React from 'react'
import { Small } from '../Text'

interface Props {
    label: string
    [props: string]: any
    area?: boolean
}


const GenericTextInput = (props: any) => <input {...props} />


const GenericTextArea = (props: any) => <textarea {...props} />


const TextInput = (props: Props) => {

    const Input = props.area ? GenericTextArea : GenericTextInput

    return <>
        <div>
            <label className='block font-medium' htmlFor={props.label}><Small>{props.label}</Small></label>
            <Input
                id={props.label}
                {...props}
                className={`outline-none text-black transition-all hover:opacity-100 focus-within:opacity-100 w-full bg-transparent border-b-2  text-lg p-0.5 pl-0  border-black ${props?.className}`}
                placeholder={props.label}
                spellCheck={false}
            />

        </div>

    </>
}


export { TextInput }