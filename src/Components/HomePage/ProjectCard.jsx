import React from 'react'

export const ProjectCard = ({id,img,title,fund,description,category,percentage,daysLeft}) => {
  return (
    <div>
        <div className='single_new_product'>
        {/* <Link to={`/${id}`}> */}
            <div className='card'>
                <img src={img} alt={title} />
            </div> 
            <p className='single_product_title'>{title}</p>
            <p>{description}</p>
            <p>{category}</p>
            <p className='single_product_price'>${fund}USD raised</p>
            <p>{percentage}%</p>
            <p>{daysLeft} days left</p>
            {/* </Link> */}
        </div>
    </div>
  )
}
