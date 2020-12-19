import React from 'react'
import { TextInput } from './Input'
import Logo from './Logo'
import MenuItem from './MenuItem'
import { Medium, Small } from './Text'

export default () => {
    return <div className='bg-pink p-24  w-full'>
        <div className=''>
            <Logo className="h-24 mr-12" />
            <div>
                <ul className=''>
                    <MenuItem className='mr-4' text='Twitter' to='#' />
                    <MenuItem className='mr-4' text='Instagram' to='#' />
                    <MenuItem className='mr-4' text='Facebook' to='#' />
                    <MenuItem text='Pinterest' to='#' />
                </ul>
                <p className=''>
                    <Small>
                        6/8 industrial street, off town planning way, Illupeju. <br />
                    </Small>
                </p>
                <p>
                    <Small>
                        07046600070, 07046600060. <br />
                    </Small>
                </p>
            </div>
        </div>
        <form>
            <Medium className='font-medium'>Feel free to contact us, we usually respond within 2 business days</Medium>
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
                label='Message'
            />
        </form>
    </div>
}