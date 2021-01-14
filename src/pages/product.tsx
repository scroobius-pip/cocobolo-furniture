import React from 'react'
import Button from '../components/Button'
import Layout from '../components/Layout'
import MenuItem from '../components/MenuItem'
import SectionHeading from '../components/Section/SectionHeading'
import SectionPicture from '../components/Section/SectionPicture'
import { Medium, Small } from '../components/Text'


export default () => {
    return <Layout>
        <section>
            <SectionPicture image='https://vrflowersandson.co.uk/wp-content/uploads/2020/09/sofa_and_chairs_memphis-768x441.jpg' />
            <div className='mt-24'>
                <ul>
                    <MenuItem
                        className=''
                        text='<Back to Office Chairs'
                        to='/category'
                    />
                </ul>

                <SectionHeading title='High Back Office Chair' ghost={false} />

            </div>
            <div className='mt-4'>
                <h2><Small >Product Id</Small></h2>
                <span><Small className='font-bold'>0012</Small></span>
            </div>
            <section className='grid grid-cols-1 sm:grid-cols-2 mt-16 gap-12'>
                <div style={{ background: "linear-gradient(to right, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.02) 100%)" }}>
                    <img alt='High back office chair' src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/50/244954/1.jpg?2218" style={{ position: 'relative', zIndex: -1 }} />
                </div>
                <div>
                    <p className='max-w-lg'>
                        <Small>Mesh chair with Headrest (Black) PU adjustable headrest, adjustable armrest, 40 density sponge, normal mechanism with 1 position locking, Class 3 gaslift, 330 chrome base, nylon caster</Small>
                    </p>
                    <div className='flex items-center mt-12 justify-end md:justify-start'>
                        <Small className='mr-8'>NGN 233,999</Small>
                        <Button text='Inquire'></Button>
                    </div>
                </div>
            </section>

        </section>
    </Layout>
}
