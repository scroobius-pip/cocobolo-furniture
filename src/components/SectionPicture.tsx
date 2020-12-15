import React from 'react'

export default ({ image }: { image: string }) => {
    return <div
        className="h-full bg-no-repeat bg-cover bg-center bg-pink"
        style={{
            height: '60vh',

            backgroundImage: `url(${image})`
        }}
    />
}