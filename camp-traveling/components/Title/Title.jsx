import React from 'react'

const Title = ({title, desc}) => {
  return (
    <div>
        <h1 className='text-4xl font-roboto font-bold'>{title}</h1>
        <p className='font-roboto font-light mt-2 text-[#8F8F8F]'>{desc}</p>
    </div>
  )
}

export default Title