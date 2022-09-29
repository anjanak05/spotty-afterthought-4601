import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getHomePageData } from '../../Redux/homePageReducer/action';
import {ProjectCard} from "./ProjectCard"


export const PopularProject = () => {
    const dispatch = useDispatch();
  let product = useSelector((state)=>state.homePageReducer.HomePageData)
  console.log("s",product)

  useEffect(()=>{
    if(product.length === 0){
      dispatch(getHomePageData());
    }
  },[])
  return (
    <div>
        <div className='new_product'>
          {product.length>0 && product.map((item)=>(
            <ProjectCard key={item.id} {...item}/>
          ))}
        </div>
    </div>
  )
}
