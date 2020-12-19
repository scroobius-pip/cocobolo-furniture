import React from 'react'
import { TextInput } from './Input'
import Logo from './Logo'
import MenuItem from './MenuItem'
import { XLarge, Medium, Small, Large } from './Text'

export default () => {
    return <div className='bg-pink p-24  w-full flex flex-col-reverse sm:flex-row  justify-between '>


        <div className='md:flex  w-full'>
            <Logo className="h-24 mr-12 hidden lg:block" />
            <div>
                <h4 className='font-medium'><Small>Social</Small></h4>
                <ul className='md:flex mb-4'>
                    <MenuItem className='mr-4' text='Twitter' to='#' />
                    <MenuItem className='mr-4' text='Instagram' to='#' />
                    <MenuItem className='mr-4' text='Facebook' to='#' />
                    <MenuItem text='Pinterest' to='#' />
                </ul>
                <h4 className='font-medium'><Small>Address</Small></h4>
                <p className=' mb-4 '>
                    <Small>
                        6/8 industrial street, off town planning way, Illupeju. <br />
                    </Small>
                </p>
                <h4 className='font-medium'><Small>Phone</Small></h4>
                <p>
                    <Small>
                        07046600070, 07046600060. <br />
                    </Small>
                </p>
            </div>
        </div>
        <form className='w-full mb-24'>
            <h4 className='mb-12'><Large className='font-medium'>Feel free to contact us, we usually respond within 2 business days.</Large></h4>

            <TextInput
                className='mb-4'
                label='Email'
            />
            <TextInput
                className='mb-4'
                label='Phone Number'
            />

            <TextInput
                className='mb-4'
                label='Interested in a Product ? Enter Its Product Id'
            />

            <TextInput
                area
                className='mb-4'
                label='Message'
            />
        </form>
    </div>
}