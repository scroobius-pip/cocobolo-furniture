import React from 'react'
import styles from './index.module.css'



const Item = () => {
    return <div className={`bg-pink cursor-pointer ${styles.item}`} >

    </div>
}

export default () => {
    return <div className='flex flex-wrap '>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
    </div>
}