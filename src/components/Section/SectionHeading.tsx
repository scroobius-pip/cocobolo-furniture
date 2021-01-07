import React from 'react'

export default ({ title, ghost = true }: { title: string, ghost?: boolean }) => {
    return <div className='relative z-20 ' id={title.toLowerCase()}>
        <h1 className="text-5xl font-bold mt-5">{title}</h1>
        {ghost && <h1 style={{ zIndex: -40, }} className='absolute  text-6xl font-bold select-none  bottom-5 left-3 text-pink'>{title}</h1>}
    </div>
}