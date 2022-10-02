import React from 'react'
import "./findiTFirst.css"
import { Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const FindITFirst = () => {
  return (
    <div className='findContainer'>
        <Heading as='h1' size='xl'>Find it first on Indiegogo</Heading>
        <p className='indeigo_text_1'>Indiegogo is where early adopters and innovation seekers find lively, imaginative tech before it hits the mainstream.</p>
        <Link to='/Signup'><button className='signUp_button'>SIGN UP NOW</button></Link>
        <button className='learn_button'>LEARN MORE</button>
    </div>
  )
}
