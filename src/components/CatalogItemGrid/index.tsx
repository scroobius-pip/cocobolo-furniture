import React from 'react'
import MenuItem from '../MenuItem'
import { Medium, Small } from '../Text'
import style from './index.module.css'

const Item = ({ title = '', to = '' }) => <MenuItem className='font-medium mr-4 mt-4' text={title} to={to} />



interface Props {
    category: string
    items: Array<{ to: string, title: string }>
}

export default (props: Props) => {
    return <article className='mb-8 -m-4 sm:m-0'>
        <h2 className='font-medium mb-4 m-4 sm:ml-0'>
            <Medium>{props.category}</Medium>
        </h2>
        <div className={`${style.grid} bg-pink pt-4 pb-8 pl-8 pr-8`}>
            {props.items.map((p) => <Item key={p.title} {...p} />)}
        </div>
    </article>

}


