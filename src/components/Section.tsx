import React, { ReactNode } from 'react';
import SectionHeading from './SectionHeading';
import SectionPicture from './SectionPicture';

type Nullable<T> = T | null

interface Props {
    children: ReactNode
    image?: string
}

export default (props: Props) => {
    return <section className='flex justify-between mb-44'>
        <div className='w-3/5 max-w-xl'>
            {props.children}
        </div>
        {props.image && <div className='w-2/5 max-w-lg'>
            <SectionPicture image={props.image} />
        </div>}
    </section>
}
