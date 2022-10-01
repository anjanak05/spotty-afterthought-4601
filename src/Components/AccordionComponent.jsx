import React from 'react'

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react' 
  import style from "../Styles/ProductsPage.module.css"

const AccordionComponent = () => {
  return (
    <div allowToggle >
    <Accordion allowToggle  defaultIndex={0} >
            <AccordionItem>
                <h2>
                <AccordionButton >
                    <Box  textAlign='left'>
                      Tech & Innovation
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} pl={10}>
                   <h2 style={{color:"#e51075"}}>Audio</h2>
                   <h2 style={{marginTop:"15px"}}>Camera Gear</h2>
                   <h2 style={{marginTop:"15px"}}>Education</h2>
                   <h2 style={{marginTop:"15px"}}>Energy & Green Tech</h2>
                   <h2 style={{marginTop:"15px"}}>Fashion & Wearables</h2>
                   <h2 style={{marginTop:"15px"}}>Food & Beverages</h2>
                   <h2 style={{marginTop:"15px"}}>Health & Fitness</h2>
                   <h2 style={{marginTop:"15px"}}>Home</h2>
                   <h2 style={{marginTop:"15px"}}>Phones & Accessories</h2>
                   <h2 style={{marginTop:"15px"}}>Productivity</h2>
                   <h2 style={{marginTop:"15px"}}>Transportation</h2>
                   <h2 style={{marginTop:"15px"}}>Travel & Outdoors</h2>
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                <AccordionButton >
                    <Box  textAlign='left'>
                        Creative Works 
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} pl={10} lineHeight={2.2}>
                    <h2 style={{marginTop:"15px"}}>Art</h2>
                    <h2 style={{marginTop:"15px"}}>Comics</h2>
                    <h2 style={{marginTop:"15px"}}>Dance & Theater</h2>
                    <h2 style={{marginTop:"15px"}}>Film</h2>
                    <h2 style={{marginTop:"15px"}}>Music</h2>
                    <h2 style={{marginTop:"15px"}}>Photography</h2>
                    <h2 style={{marginTop:"15px"}}>Podcasts, Blogs & Vlogs</h2>
                    <h2 style={{marginTop:"15px"}}>Tabletop Games</h2>
                    <h2 style={{marginTop:"15px"}}>Video Games</h2>
                    <h2 style={{marginTop:"15px"}}>Web Series & TV Shows</h2>
                    <h2 style={{marginTop:"15px"}}>Writing & Publishing</h2>
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                <AccordionButton >
                    <Box textAlign='left'>
                        Community Projects 
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} pl={10} lineHeight={2.2}>
                    <h2 style={{marginTop:"15px"}}>Culture</h2>
                    <h2 style={{marginTop:"15px"}}>Environment</h2>   
                    <h2 style={{marginTop:"15px"}}>Human Rights</h2>
                    <h2 style={{marginTop:"15px"}}>Local Businesses</h2>
                    <h2 style={{marginTop:"15px"}}>Wellness</h2>
                </AccordionPanel>
            </AccordionItem>
    </Accordion>
</div>
  )
}

export default AccordionComponent