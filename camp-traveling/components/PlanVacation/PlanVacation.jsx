import React from 'react'
import Title from '../Title/Title'
import Image from 'next/image'

const PlanVacation = () => {
  return (
    <section className='container mx-auto px-4'>
        <Image  layout='responsive' data-aos="zoom-in" data-aos-delay="100" src={'/map1.png'}  width={100} height={100} alt=''/>
    </section>
  )
}

export default PlanVacation