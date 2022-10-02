import React from 'react'
import { Link } from 'react-router-dom'
import "./imageTiles.css"

export const ImageTiles = () => {
  return (
    <div>
        <div className='imageTile_1'>
            <div>
                <div className='imagediv_img'>
                    <img src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1664384340/dxlpczk2t7etftjh21st.jpg" alt="" />
                    <div className='text_centerd'>10 Cool & Clever</div>
                </div>
                <div className='imagediv_text'>
                    <div className='textOur'>Our roundup of Standout project</div>
                    <div className='textOur'>SEE THE COLLECTION </div>
                </div>
            </div>
            <div>
            <div className='imagediv_img'>
                    <img src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1664384293/po4aiqjrnquowbppa89z.jpg" alt="" />
                    <div className='text_centerd'>Team Favorites</div>
                </div>
                <div className='imagediv_text'>
                    <div className='textOur'>Dream Glass Flow & more team Favorites</div>
                    <div className='textOur'>SEE THE COLLECTION</div>
                </div>
            </div>
            <div>
            <div className='imagediv_img'>
                    <img src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1655332492/xmwmdtjfvyy2mbbre4qo.png" alt="" />
                    <div className='text_centerd'>Spend Under $100</div>
                </div>
                <div className='imagediv_text'>
                    <div className='textOur'>Check out these innovation steals</div>
                    <div className='textOur'>SEE THE COLLECTION </div>
                </div>
            </div>
            <div>
            <div className='imagediv_img'>
                    <img src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1664384340/dxlpczk2t7etftjh21st.jpg" alt=""/>
                    <div className='text_centerd'>Shipping Now</div>
                </div>
                <div className='imagediv_text'>
                    <div className='textOur'>These campagins could be in your hands quickly</div>
                    <div className='textOur'>SEE THE COLLECTION </div>
                </div>
            </div>
        </div>

        <div>
            <div className='background_imageR'>
               <img src="https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/homepage/cf-bg-desktop-lg.jpg" alt="" />
                <div className='imagetextpostion1'>Back the project, take the ride</div>
                <div className='imagetextpostion2'>Indiegogo is your destination for clever innovations in tech, design, and more, often with special perks and pricing for early adopters. Back a campaign, share your ideas and feedback with the project team - and join the risks and rewards of bringing new products to life.</div>
                <div className='imagetextpostion3'>LEARN ABOUT CROWDFUNDING</div>
            </div>
        </div>

        <div>
            <div className='interetBox01'>
                <div className='interestHeading'>Which categories interest you?</div>
                <div className='interestDiscover'>Discover project just for you and get great recommendations when you select your interests.</div>
                <div className='interestButton'>sign up and select interests</div>
                <div className='interestExplore'>Or explore our top categories</div>
                <div className='interestImage1'>
                    <div>
                        <div className='interestImage2'>
                            <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5462376.jpg" alt="" />
                        </div>
                        <div className='interetText02'>HOME</div>
                    </div>
                    <div>
                        <div className='interestImage2'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR65vKrYldm09kL4qG6EwRAaekumOkrJtAAjg&usqp=CAU" alt="" />
                        </div>
                        <div className='interetText02'>PHONE &</div>
                    </div>
                    <div>
                    <div className='interestImage2'>
                            <img src="data:image/jpeg;base64,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" alt="" />
                        </div>
                        <div className='interetText02'>TRAVEL </div>
                    </div>
                    <div>
                    <div className='interestImage2'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo2Jy3xuaVIWqTmz4KgKw3tBFwKGcS-GlVhmikdYp3tXMFN7xx6cagIGA8trYm7uzWl9Q&usqp=CAU" alt="" />
                        </div>
                        <div className='interetText02'>HEALTH </div>
                    </div>
                    <div>
                    <div className='interestImage2'>
                            <img src="data:image/jpeg;base64,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" alt="" />
                        </div>
                        <div className='interetText02'>AUDIO</div>
                    </div>
                    <div>
                    <div className='interestImage2'>
                            <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX6157262.jpg" alt="" />
                        </div>
                        <div className='interetText02'>FILM</div>
                    </div>
                </div>
            </div>
        </div>

        <br /><br />

        <div>
            <div className='interestHeading'>From the Indiegogo Review</div>
            <div className='interestDiscover'>Your behind-the-scenes view of the people and stories behind indiegogo projects</div>
        </div>

        <br /><br />

        <div>
            <div className='indiegogoReview'>
                <div>
                    <div className='reviewImage'>
                        <img src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1660231108/h3ayekkkolooq5k9ilvq.png" alt="" />
                    </div>
                    <div className='reviewText03R'>
                        <div className='reviewText04R'>Indiegogo and StartEngine Join Forces</div>
                        <div className='reviewText05R'>How to rasie more funds after your campaign</div>
                        <div className='reviewText06R'>Learn More</div>
                    </div>
                </div>
                <div>
                <div className='reviewImage'>
                        <img src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1660454271/xq8oqua1iie8y5abbxoi.png" alt="" />
                    </div>
                    <div className='reviewText03R'>
                        <div className='reviewText04R'>I Tired This Mini Gaming Handheld For A Day </div>
                        <div className='reviewText05R'>We review the new Ayaneo Air and put it to the test!</div>
                        <div className='reviewText06R'>Learn More</div>
                    </div>
                </div>
                <div>
                <div className='reviewImage'>
                        <img src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1660288199/ak5wz5zhr0ghiwwravay.png" alt="" />
                    </div>
                    <div className='reviewText03R'>
                        <div className='reviewText04R'>5 New Gadgets Under $100</div>
                        <div className='reviewText05R'>Which ones will you fund next?</div>
                        <div className='reviewText06R'>Learn More</div>
                    </div>
                </div>
            </div>
        </div>

        <br />

        <div>
            <div className='findContainer'>
                <div className='jamtaraClever'>Clever Things For Curious Humans </div>
                <p className='indeigo_text_1'>There.s no better place to start the hunt for something new and special. Began on Indiegogo to find clever and <br /> unconvential things that solve everyday problems large and small.</p>
                <Link to='/Signup'><button className='signUp_button'>SIGN UP NOW</button></Link>
                <button className='learn_button'>LEARN MORE</button>
            </div>
        </div>


    </div>
  )
}
