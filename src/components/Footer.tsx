import React from 'react'
import Contact from './Contact'
import Logo from './Logo'
import MenuItem from './MenuItem'
import Section from './Section'
import SectionHeading from './Section/SectionHeading'
import { Small } from './Text'

export default () => {
    return <div className='md:flex  '>
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

}