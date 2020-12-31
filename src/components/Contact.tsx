import React from 'react'
import { TextInput } from './Input'
import Logo from './Logo'
import MenuItem from './MenuItem'
import { XLarge, Medium, Small, Large } from './Text'

export default () => {
    return <div className='bg-pink p-12 -m-4 sm:m-0 h-full'>
        <form className='w-full h-full'>
            <h4 className='mb-12'><Large className='font-medium'>Feel free to contact us, we usually respond within 2 business days.</Large></h4>

            <TextInput
                className='mb-8'
                label='Email'
            />
            <TextInput
                className='mb-8'
                label='Phone Number'
            />

            <TextInput
                className='mb-8'
                label='Interested in a Product ? Enter Its Product Id'
            />

            <TextInput
                area
                className='mb-8'
                label='Message'
            />
            <input
                className='py-4 px-6 w-full sm:w-min mr-0 ml-auto block bg-black text-white outline-none cursor-pointer'
                type='submit'
            >

            </input>
        </form>
    </div>
}