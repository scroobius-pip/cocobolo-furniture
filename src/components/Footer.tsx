import React from 'react'
import Contact from './Contact'
import Section from './Section'
import SectionHeading from './SectionHeading'

export default () => {
    return <footer>
        <Section>
            <div className='w-full'>
                <SectionHeading title='Contact' />
                <div className='mt-10 w-full'>
                    <Contact />
                </div>
            </div>
        </Section>
    </footer>
}