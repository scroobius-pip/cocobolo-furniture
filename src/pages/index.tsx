import React, { ReactElement, useState } from "react"
import Dropdown from '../components/CatalogMenu'
import Layout from '../components/Layout'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import SectionPicture from '../components/SectionPicture'
import { Medium } from '../components/Text'

interface Props { }

function Index(_props: Props): ReactElement {

  return (
    <Layout>
      <Section image="https://www.decor.ng/wp-content/uploads/2018/06/technology-interior-design.jpg">
        <div className='w-4/5 max-w-xl'>
          <h1 className='text-5xl leading-relaxed'>Pushing Conventional <span className='text-wine font-medium'>Boundaries</span>, Turning Space Into <span className='text-wine font-medium'>Experiences.</span></h1>
          <Medium className='leading-relaxed mt-10'>
            We design and create spaces from residential homes to office spaces with a focus on functionality and aesthetic appeal.
         </Medium>
        </div>
      </Section>
      <Section image="https://www.decor.ng/wp-content/uploads/2019/11/TCDX3141.jpg">
        <div className='w-4/5 max-w-xl'>
          <SectionHeading title='Catalog' />
          <Dropdown />
        </div>
      </Section>
      <Section image="https://www.decor.ng/wp-content/uploads/2020/08/FIN-2-1.jpg">
        <div className='w-4/5 max-w-xl'>
          <SectionHeading title='About' />
          <Medium className='leading-relaxed mt-10'>
            Cocobolo offers you a catalogue of high quality, and affordable pieces of furniture, homeware and interior decor items across all states in Nigeria.
</Medium>
        </div>
      </Section>
    </Layout>
  )
}

export default Index
