import React from 'react'
import "./findiTFirst.css"
import { Heading } from '@chakra-ui/react'

export const FindITFirst = () => {
  return (
    <div className='findContainer'>
        <Heading as='h1' size='xl'>Find it first on Indiegogo</Heading>
        <p>Indiegogo is where early adopters and innovation seekers find lively, imaginative tech before it hits the mainstream.</p>
        <button className='signUp_button'>SIGN UP NOW</button>
        <button className='learn_button'>LEARN MORE</button>
    </div>
  )
}
