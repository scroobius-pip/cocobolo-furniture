import React, { ReactElement, useState } from "react"
import Layout from '../components/Layout'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import SectionPicture from '../components/SectionPicture'

interface Props { }

function Index(_props: Props): ReactElement {

  return (
    <Layout>
      <Section image="https://www.decor.ng/wp-content/uploads/2018/06/technology-interior-design.jpg">
        <div className='w-4/5 max-w-xl'>
          <h1 className='text-5xl leading-relaxed'>Pushing Conventional <span className='text-wine font-medium'>Boundaries</span>, Turning Space Into <span className='text-wine font-medium'>Experiences.</span></h1>
          <h3 className='text-xl mt-10 leading-relaxed'>
            We design and create spaces from residential homes to office spaces with a focus on functionality and aesthetic appeal.
     </h3>
        </div>
      </Section>
      <Section image="https://www.decor.ng/wp-content/uploads/2018/06/technology-interior-design.jpg">
        <div className='w-4/5 max-w-xl'>
          <SectionHeading title='Catalog' />
        </div>
      </Section>
    </Layout>
  )
}

export default Index
