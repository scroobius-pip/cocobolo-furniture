import React from 'react'


export default ({ className = '', text = '' }) => {
    return <input
        className={'py-4 px-6  block bg-black text-white outline-none cursor-pointer ' + className}
        type='submit'
        value={text}
    >

    </input>
}