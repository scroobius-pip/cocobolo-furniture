import React from 'react'
import styles from './index.module.css'

interface ItemProps {
    to: string
    image: string
}

const Item = (props: ItemProps) => {
    return <a style={{ backgroundImage: `url(${props.image})` }} className={`bg-pink cursor-pointer bg-cover  bg-center  ${styles.item}`} href={props.to} />
}

interface Props {
    items: ItemProps[]
}

export default (props: Props) => {
    return <div className='flex flex-wrap '>
        {props.items.map(item => <Item {...item} key={item.to} />)}
    </div>
}