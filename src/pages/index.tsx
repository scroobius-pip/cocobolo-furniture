import React, { ReactElement, useState } from "react"
import Dropdown from '../components/CatalogMenu'
import Contact from '../components/Contact'
import Layout from '../components/Layout'
import Section from '../components/Section'
import SectionHeading from '../components/Section/SectionHeading'
import SectionPicture from '../components/Section/SectionPicture'
import { Medium } from '../components/Text'

interface Props { }

function Index(_props: Props): ReactElement {

  return (
    <Layout>
      <Section style={{}} image="https://www.decor.ng/wp-content/uploads/2018/06/technology-interior-design.jpg">
        <div className='max-w-md'>
          <h1 className='text-5xl  leading-relaxed'>Pushing Conventional <span className='text-wine font-medium'>Boundaries</span>, Turning Space Into <span className='text-wine font-medium'>Experiences.</span></h1>
          <h3 className='mt-10'>
            <Medium className='leading-relaxed'>
              We design and create spaces from residential homes to office spaces with a focus on functionality and aesthetic appeal.
         </Medium>
          </h3>
        </div>
      </Section>
      <Section className='mb-24'>
        <SectionHeading title='Catalog' />
        <div className='w-full p-12 pl-0 mt-12 relative'>
          <div style={{ backgroundImage: `url('https://www.decor.ng/wp-content/uploads/2019/11/TCDX3141.jpg')`, backgroundSize: 'cover' }} className='absolute h-full w-2/3 right-0 opacity-60'></div>
          <div className='pl-12'>
            <Dropdown />
          </div>
        </div>
      </Section>
      <Section image="https://www.decor.ng/wp-content/uploads/2020/08/FIN-2-1.jpg">
        <div className='max-w-md'>
          <SectionHeading title='About' />
          <h3 className='mt-10'>
            <Medium className='leading-relaxed '>
              Cocobolo offers  a catalogue of high quality, and affordable pieces of furniture, homeware and interior decor items across all states in Nigeria.</Medium>
          </h3>

        </div>
      </Section>
      <Section image="https://www.decor.ng/wp-content/uploads/2020/08/FIN-2-1.jpg">

        <div className=' lg:ml-0 lg:mr-0 h-full'>
          <div className=''>

            <SectionHeading title='Contact' />
          </div>
          <div className='mt-10 w-full '>
            <Contact />
          </div>
        </div>

      </Section>
    </Layout >
  )
}

export default Index
