import React from 'react'
import CatalogItemGrid from '../components/CatalogItemGrid'
import Layout from '../components/Layout'
import Section from '../components/Section'
import SectionHeading from '../components/Section/SectionHeading'
import SectionPicture from '../components/Section/SectionPicture'
import { Medium } from '../components/Text'

interface CategoryItemData {
    title: string
    to: string
}

interface CategoryData {
    [name: string]: CategoryItemData[]
}


const catalogData: CategoryData = {
    Home: [
        { title: 'Beds', to: '/category' },
        { title: 'Cupboards', to: '/category' },
        { title: 'Drawers', to: '/category' },
        { title: 'Sofas', to: '/category' },
        { title: 'Consoles', to: '/category' },
        { title: 'Doors', to: '/category' },
    ],
    Office: [
        { title: 'Office Chairs', to: '/category' },

        { title: 'Reception Counters', to: '/category' },
        { title: 'Pedestals', to: '/category' },
        { title: 'Filling Cabinets', to: '/category' },
        { title: 'Workstations', to: '/category' },
    ],
    Other: [

        { title: 'Display Units', to: '/category' },
    ]
}

export default () => {
    return <Layout>
        <section>
            <SectionPicture image='https://www.decor.ng/wp-content/uploads/2020/08/FIN-2-1.jpg' />
            <div className='mt-24'>
                <SectionHeading title='Catalog' />
            </div>
            <h3 className='mt-10 max-w-4xl mb-16'>
                <Medium className='leading-relaxed'>
                    We design and create spaces from residential homes to office spaces with a focus on functionality and aesthetic appeal.
         </Medium>
            </h3>

            {Object.entries(catalogData).map(([title, data]) =>
                <CatalogItemGrid
                    items={data}
                    category={title}
                    key={title}
                />
            )}
        </section>
    </Layout>
}