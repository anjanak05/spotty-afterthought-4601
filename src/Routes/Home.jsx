import React from 'react'
import { FindITFirst } from '../Components/HomePage/FindITFirst'
import { ImageTiles } from '../Components/HomePage/ImageTiles'
import { PopularProject } from '../Components/HomePage/PopularProject'
import { Slider } from '../Components/HomePage/Slider'

const Home = () => {
  return (
    <div>
      <Slider/>
      <FindITFirst/>
      <PopularProject/>
      <ImageTiles/>
    </div>
  )
}

export default Home