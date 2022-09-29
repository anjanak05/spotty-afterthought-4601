import React from 'react'
import { FindITFirst } from '../Components/HomePage/FindITFirst'
import { PopularProject } from '../Components/HomePage/PopularProject'
import { Slider } from '../Components/HomePage/Slider'

const Home = () => {
  return (
    <div>
      <Slider/>
      <FindITFirst/>
      <PopularProject/>
    </div>
  )
}

export default Home