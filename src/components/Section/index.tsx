import React, { ReactNode } from 'react';
import SectionHeading from './SectionHeading';
import SectionPicture from './SectionPicture';
import styles from './section.module.css'

type Nullable<T> = T | null

interface Props {
    children: ReactNode
    image?: string
}

export default (props: Props) => {
    const imageExists = !!props?.image

    return <section className={styles.section}>
        <div className='h-full'>
            {props.children}
        </div>
        {imageExists &&
            <SectionPicture image={props?.image ?? ''} />
        }
    </section>
}
