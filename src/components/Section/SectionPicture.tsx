import React from 'react'

export default ({ image }: { image: string }) => {
    return <div
        className="bg-no-repeat -m-4 sm:m-0 h-full bg-cover bg-center object-cover bg-pink"
        style={{
            backgroundImage: `url(${image})`,
            minHeight: '20vh'
        }}
    />
}