import React from 'react'
import CatalogItemGrid from '../components/CatalogItemGrid'
import CategoryItemGrid from '../components/CategoryItemGrid'
import Layout from '../components/Layout'
import MenuItem from '../components/MenuItem'
import Section from '../components/Section'
import SectionHeading from '../components/Section/SectionHeading'
import SectionPicture from '../components/Section/SectionPicture'
import { Medium, Small } from '../components/Text'


export default () => {
    return <Layout>
        <section>
            <SectionPicture image='https://www.decor.ng/wp-content/uploads/2020/08/FIN-2-1.jpg' />
            <div className='mt-24'>
                <SectionHeading title='Office Chairs' />
                <ul>
                    <MenuItem
                        className=''
                        text='<Back to Catalog'
                        to='/catalog'
                    />
                </ul>
            </div>
            <h3 className='mt-10 max-w-4xl mb-16'>
                <Small className='leading-relaxed'>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.

         </Small>
            </h3>
            <CategoryItemGrid items={[
                { image: 'https://images-na.ssl-images-amazon.com/images/I/714X5CMZO9L._AC_SL1500_.jpg', to: '/product' },

            ]}
            />

        </section>
    </Layout>
}