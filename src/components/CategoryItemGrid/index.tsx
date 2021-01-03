import React from 'react'

const itemStyles = {
    width: '15vw',
    minWidth: 200,
    height: '15vw',
    minHeight: 200,
}

const Item = () => {
    return <div className='bg-pink m-1 cursor-pointer' style={itemStyles}>

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