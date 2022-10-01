import React from 'react'
import { useSelector } from 'react-redux'
import { FindITFirst } from '../Components/HomePage/FindITFirst'
import { ImageTiles } from '../Components/HomePage/ImageTiles'
import { PopularProject } from '../Components/HomePage/PopularProject'
import { Slider } from '../Components/HomePage/Slider'

const Home = () => {
  const loginData = useSelector((state) => state.authReducer);
  console.log(loginData)
  
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