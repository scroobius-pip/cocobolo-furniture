import React, { ReactNode } from 'react';
import SectionHeading from './SectionHeading';
import SectionPicture from './SectionPicture';

type Nullable<T> = T | null

interface Props {
    children: ReactNode
    image?: string
}

export default (props: Props) => {
    const imageExists = !!props?.image

    return <section className='flex w-full justify-between mb-44'>
        <div className={`${imageExists ? 'w-3/5 max-w-xl' : 'w-full'}`}>
            {props.children}
        </div>
        {imageExists && <div className='w-2/5 max-w-lg'>
            <SectionPicture image={props?.image ?? ''} />
        </div>}
    </section>
}
