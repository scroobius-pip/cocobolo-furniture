import React from 'react'

export default ({ title }: { title: string }) => {
    return <div className='relative' id={title.toLowerCase()}>
        <h1 className="text-5xl font-bold">{title}</h1>
        <h1 style={{ zIndex: -40 }} className='absolute text-6xl font-bold  bottom-5 left-3 text-pink'>Catalog</h1>
    </div>
}