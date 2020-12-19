import React from 'react'
import Contact from './Contact'
import Section from './Section'
import SectionHeading from './SectionHeading'

export default () => {
    return <footer className='w-full m-auto'>
        <section >
            <div className='-ml-36 -mr-36 lg:ml-0 lg:mr-0'>
                <div className='ml-24 lg:ml-0'>

                    <SectionHeading title='Contact' />
                </div>
                <div className='mt-10 w-full '>
                    <Contact />
                </div>
            </div>
        </section>
    </footer>
}