
import React, {useState,useEffect} from "react";
import { NavLink } from "react-router-dom";
import { Box, Image,Center,SimpleGrid,Text,Heading } from "@chakra-ui/react";

import styles from "../Styles/Navbar.module.css";

const Dropdown = () => {
    const [set, setS] = useState(true)


    // const handle = () => {
    //   setS(!set)
    // }
    //----------------------------------------------------------responsive sizes--------------------------------

    const [isDesktop, setDesktop] = useState(window.innerWidth > 800);

    const updateMedia = () => {
      setDesktop(window.innerWidth > 800);
    };
  
    useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
    });
  
  return (
    
 <div>
    {
        isDesktop?(
            <div>
                 <Box style={{ marginBottom: "5px", borderTop: "1px solid black" }}  >
      <Center>
      <Box style={{display:"flex",gap:"30px",padding:"20px"}}>
        <Box  height='80px'>
          <Heading as='h2' size='sm' mt="40px" mb="10px">Explore All Project</Heading>
         
          <Image
          
            src="https://c2.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_2.0,f_auto/homepage/crowdfunding-bg-desktop-sm.jpg"
            alt="blank"
           // className={styles.img1}
           boxSize='150px'
           w="300px"
          
   // objectFit='cover'
   
          />
        </Box>
        <div>
          <Heading as='h2' size='sm' mt="40px" mb="10px">Our top 10 Finds</Heading>
          <Image
            src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1618336553/dx7ssf5krfnevw6q8eij.jpg"
            alt="blank"
            boxSize='150px'
            
           
          />
        </div>
        <div>
          <Heading as='h2' size='sm' mt="40px" mb="10px">Team favourite</Heading>
          <Image
            src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1618332231/kf6uqtwoyhrzyuadrjjd.jpg"
            alt="blank"
            boxSize='150px'
           
          />
        </div>
        <div>
          <Heading as='h2' size='sm' mt="40px" mb="10px">InDemand Stars</Heading>
          <Image
            src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1610645828/srw2ffyyagzenfu6pznr.png"
            alt="blank"
            boxSize='150px'
           
          />
        </div>
        <div>
          <Heading as='h2' size='sm' mt="40px" mb="10px">Join the Convo</Heading>
          <Image
            src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1597692648/t5nvsqhmxvwgk8cgrtac.png"
            alt="blank"
            boxSize='150px'
            
          />
        </div>
      </Box>
      </Center>
      
     <Center>
     <div style={{display:"flex",padding:"0px 20px",columnGap:"100px"}}>
        <Box  style={{display:"flex",columnGap:"30px",lineHeight:"1rem",marginTop:"30px",paddingBottom:"10px"}}>
          <Heading as='h2' size='md' style={{position:"absolute"}}>
           
              Tech And Innovation
           
          </Heading>
          <div style={{marginTop:"50px"}}>
            <NavLink to="/ProductsPage"   >
              Audio
            </NavLink>  
            <br/><br/>
            <NavLink to="/ProductsPage"   >
              Camera Gear
            </NavLink>
            <br/><br/>
            <NavLink to="/ProductsPage"   >
              Education
            </NavLink>
            <br/><br/>
            <NavLink to="/ProductsPage"   >
              Energy and Tech
            </NavLink>
            <br/><br/>
            <NavLink to="/ProductsPage"   >
              Fashion & Wearbles
            </NavLink>
            <br/><br/>
            <NavLink to="/ProductsPage"   >
              Food & Beverage
            </NavLink>
            <br/><br/>
          </div>
          <div style={{marginTop:"50px"}}>
            <NavLink to="/ProductsPage"   >
              Health & Fitness
            </NavLink>
            <br/><br/>
            <NavLink to="/ProductsPage"   >
              Home
            </NavLink>
            <br/><br/>
            <NavLink to="/ProductsPage"   >
              Phones & Accessories
            </NavLink>
            <br/><br/>
            <NavLink to="/ProductsPage"   >
              Productivity
            </NavLink>
            <br/><br/>
            <NavLink to="/ProductsPage"   >
              Transportation
            </NavLink>
            <br/><br/>
            <NavLink to="/ProductsPage"   >
              Travel & Outdoors
            </NavLink>
            <br/><br/>
          </div>
        </Box>
        <div style={{display:"flex",columnGap:"30px",lineHeight:"1rem",marginTop:"30px",paddingBottom:"10px"}}>
          <Heading as='h2' size='md' style={{position:"absolute"}}>CREATIVE WORKS</Heading>
          <div style={{marginTop:"50px"}}>
            <NavLink to="/ProductsPage"   >
              Podcasts, Blogs & Vlogs
            </NavLink>
            <br/><br/>
            <NavLink to="/ProductsPage"   >
              Tabletop Games
            </NavLink>
            <br/><br/>
            <NavLink to="/ProductsPage"   >
              Video Games
            </NavLink>
            <br/><br/>
            <NavLink to="/ProductsPage"   >
              Web Series & TV Shows
            </NavLink>
            <br/><br/>
            <NavLink to="/ProductsPage"   >
              Writing & Publishing
            </NavLink>
            <br/><br/>
            <NavLink to="/ProductsPage"   >
              Photography
            </NavLink>
            <br/><br/>
          </div>
          <div style={{marginTop:"50px"}}>
            <NavLink to="/ProductsPage"   >
              Art
            </NavLink>
            <br/><br/>
            <NavLink to="/ProductsPage"   >
              Comics
            </NavLink>
            <br/><br/>
            <NavLink to="/ProductsPage"   >
              Dance & Theater
            </NavLink>
            <br/><br/>
            <NavLink to="/ProductsPage"   >
              Film
            </NavLink>
            <br/><br/>
            <NavLink to="/ProductsPage"   >
              Music
            </NavLink>
            <br/><br/>
          </div>
        </div>
        <div style={{lineHeight:"1rem"}}>
          <Heading as='h2' size='md' style={{marginTop:"30px",marginBottom:"20px"}}>COMMUNITY PROJECTS</Heading>
          <NavLink to="/ProductsPage"   >
            Culture
          </NavLink>
          <br/><br/>
          <NavLink to="/ProductsPage"   >
            Environment
          </NavLink>
          <br/><br/>
          <NavLink to="/ProductsPage"   >
            Human Rights
          </NavLink>
          <br/><br/>
          <NavLink to="/ProductsPage"   >
            Local Businessesness
          </NavLink>
          <br/><br/>
        </div>
      </div>
     </Center>
    </Box>
                
            </div>
        ):(
            <div>
                 <Box style={{ marginBottom: "5px", borderTop: "1px solid black" }}  >
   
      
     
     <div>
        <Box  style={{paddingLeft:"20px"}}>
        
          <div style={{marginTop:"20px",textAlign:"left"}}>
            <NavLink to="/"   >
              Home
            </NavLink>  
            <br/>
            <hr style={{marginTop:"10px",marginLeft:"-20px"}}/>
            <br/>
            <NavLink to="/ProductsPage"   >
              Explore
            </NavLink>
            <br/>
            <hr style={{marginTop:"10px",marginLeft:"-20px"}}/>
            <br/>
            <NavLink to="/ProductsPage"   >
            What We Do
            </NavLink>
            <br/>
            <hr style={{marginTop:"10px",marginLeft:"-20px"}}/>
            <br/>
            <NavLink to="/ProductsPage"   >
             For Entrepreneurs
            </NavLink>
            <br/>
            <hr style={{marginTop:"10px",marginLeft:"-20px"}}/>
            <br/>
            <NavLink to="/ProductsPage"   >
             Start a Campaign
            </NavLink>
            <br/>
            <hr style={{marginTop:"10px",marginLeft:"-20px"}}/>
            <br/>
            <NavLink to="/ProductsPage"   >
            My Campaigns
            </NavLink>
            <br/>
            <hr style={{marginTop:"10px",marginLeft:"-20px"}}/>
            <br/>
            <NavLink to="/ProductsPage"   >
            My Conributions
            </NavLink>
            <br/>
            <hr style={{marginTop:"10px",marginLeft:"-20px"}}/>
            <br/>
            <NavLink to="/ProductsPage"   >
           Settings
            </NavLink>
            <br/>
            <hr style={{marginTop:"10px",marginLeft:"-20px"}}/>
            <br/>
            <NavLink to="/ProductsPage"   >
            My Campaigns
            </NavLink>
            <br/>
            <hr style={{marginTop:"10px",marginLeft:"-20px"}}/>
            <br/>
            <NavLink to="/ProductsPage"   >
            Log Out
            </NavLink>
            <br/><br/>
          </div>
         
        </Box>
      
      
      </div>
   
    </Box>
            </div>
        )
    }
 </div>
  )
}

export default Dropdown