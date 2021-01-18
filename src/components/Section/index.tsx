import React, { ReactNode } from 'react';
import SectionHeading from './SectionHeading';
import SectionPicture from './SectionPicture';
import styles from './section.module.css'

type Nullable<T> = T | null

interface Props {
    children: ReactNode
    image?: string
    className?: string
    style?: React.CSSProperties
}

export default (props: Props) => {
    const imageExists = !!props?.image

    return <section style={props?.style} className={`${styles.section} ${props?.className}`}>
        <div className='h-full'>
            {props.children}
        </div>
        {imageExists &&
            <SectionPicture image={props?.image ?? ''} />
        }
    </section>
}
