import React from 'react'
import {CONTACT} from '../constants'

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <h1 className='my-10 text-center text-4xl'>Get in touch</h1>
      <div className='text-center tracking-tighter'>
        <p className='my-4'>{CONTACT.address}</p>
        <p className='my-4 '>{ CONTACT.phoneNo}</p>
        <p className='my-4 '>{ CONTACT.officeNo}</p>
        <a href="#" className='mx- 4 border-b'>{ CONTACT.email}</a>   
        <p className='my-4 '></p>
        <a href="#" className=' my-4 border-b'>{ CONTACT.officeemail}</a>
      </div>
    </div>
  )
}

export default Contact