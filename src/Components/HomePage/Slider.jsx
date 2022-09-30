import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import "./slider.css"
import { Heading } from '@chakra-ui/react'

export const Slider = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

  return (
    <div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 imgforSliderR" 
          src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1664294818/cs88q6rbzlobos2prwyf.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
            <div className="nameHeadingR">
                <Heading as='h5' size='sm'>Just Launched GREAT JOY T2.9 35mm 1.8x Anamorphic Lens</Heading>
                <p>New Budget Anamorphic King, 1.8x Anamorphic Lens Set with Stunning Performance</p>
                <Heading as='h6' size='xs' className='underlineTag'>SEE CAMPAIGN</Heading >
                <p>1/6</p>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgforSliderR"
          src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1664298780/rik4figygisjo2nzoqq3.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
            <div className="nameHeadingR">
                <Heading as='h5' size='sm'>Just Launched! IMMOOTR BAY Series Portable Power Station</Heading>
                <p>542.9Wh & 1023Wh | PD100W | Lightweight | Solar Pannel | Wireless Charging | AC & DC | Smart App</p>
                <Heading as='h6' size='xs' className='underlineTag'>SEE CAMPAIGN</Heading >
                <p>2/6</p>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgforSliderR"
          src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1663866576/rcmaygmarbmseoccwmt1.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
            <div className="nameHeadingR">
                <Heading as='h5' size='sm'>GRYPHON 6E</Heading>
                <p>MetaSafe Blockchain & Wifi Router</p>
                <Heading as='h6' size='xs' className='underlineTag'>SEE CAMPAIGN</Heading >
                <p>3/6</p>
            </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 imgforSliderR"
          src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1664295391/tx8bsjtd4rtk3rwx9uiw.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
            <div className="nameHeadingR">
                <Heading as='h5' size='sm'>Coming Soon! Buxus Eva</Heading>
                <p>An E-bike with a Motorcycle Sprint</p>
                <Heading as='h6' size='xs' className='underlineTag'>SEE CAMPAIGN</Heading >
                <p>4/6</p>
            </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 imgforSliderR"
          src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1664295495/wxv8xstvbju5gkjjplbs.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
            <div className="nameHeadingR">
                <Heading as='h5' size='sm'>Coming Soon! Rymic E-Bike</Heading>
                <p>Designed Specifically for Commuters</p>
                <Heading as='h6' size='xs' className='underlineTag'>SEE CAMPAIGN</Heading >
                <p>5/6</p>
            </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 imgforSliderR"
          src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1664314845/ps3luk3boc8wvnxfatjq.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
            <div className="nameHeadingR">
                <Heading as='h5' size='sm'>Coming Soon! The World's First Portable Ice Cream Maker</Heading>
                <p>Wireless & Portable | Cooling System | Handy Operation | 2-In-1 Freezer Bowl | Easy to Clean</p>
                <Heading as='h6' size='xs' className='underlineTag'>SEE CAMPAIGN</Heading >
                <p>1/6</p>
            </div>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    </div>
  )
}



/* 

3-https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1663866576/rcmaygmarbmseoccwmt1.jpg

2-https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1664294818/cs88q6rbzlobos2prwyf.jpg

1-https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1664298780/rik4figygisjo2nzoqq3.jpg 

4-https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1664295391/tx8bsjtd4rtk3rwx9uiw.jpg

5-https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1664295495/wxv8xstvbju5gkjjplbs.jpg

6-https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1664314845/ps3luk3boc8wvnxfatjq.jpg

*/