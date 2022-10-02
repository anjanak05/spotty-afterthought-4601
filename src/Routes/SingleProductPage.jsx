import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from '../Styles/SingleProductPage.module.css';
import { BsHeart } from 'react-icons/bs';
import { FaFacebookSquare, FaTwitter, FaLink} from 'react-icons/fa'; 
import {getAudioProjectData} from "../Redux/productPageReducer/action" 
import SingleProductSection from '../Components/SingleProductMidSection';

const SingleProductPage = () => {
  const { id } = useParams();
  const [singlProductData, setSingleProductData] = useState({});
  const productData = useSelector(state => state.productPageReducer.audioProjects);
  const dispatch = useDispatch();

console.log(productData)
  useEffect(() => {
    if (productData.length === 0) {
      dispatch(getAudioProjectData());
    }
  }, [productData.length, dispatch]);

  useEffect(() => {
    if (id) {
      const updatedProductData = productData.find(
        elem => elem.id === Number(id)
      );
      updatedProductData && setSingleProductData(updatedProductData);
    }
  }, [productData, id]);

 
  return (
    <div id={styles.singleProductPageContainer}>
      <div className={styles.TopSectionSingleProductPage}>
        <div>
          <iframe
            width="100%"
            height="200px"
            src="https://www.youtube.com/embed/FF2fDzR_L4w"
            title={singlProductData.title}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <p className={styles.singleProductPageCategory}>{singlProductData.category}</p>
          <p className={styles.singleProductTitle}>
            {singlProductData.title}
          </p>
          <p className={styles.singleProductPara}>
          {singlProductData.features}
          </p>
          <div className={styles.singleProductPageCompanyName}>
            <img 
              src="https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_40,g_center,q_auto:best,dpr_1.5,f_auto,h_40/slnmsvcmjccipknek42f"
              alt="comapnyPic"
             
            ></img>
            <div>
              <p className={styles.bold}>{singlProductData.companyName}</p>
              <p>{singlProductData.companyAddress}</p>
            </div>
          </div>
          <p className={styles.singleProductPageFund}>
            <span
              style={{
                fontSize: '19px',
                fontWeight: 'Bold',
                borderBottom: '2px dotted grey',
              }}
            >
              {singlProductData.fund}
            </span>{' '}
            INR by {singlProductData.backers} backers
          </p>
          <p className={styles.singleProductPageFundSecond}>
            ₹51,725,370 INR by 2,005 backers on Jun 5, 2022
          </p>
          <div className={styles.singleProductPageSocialMedia}>
            <button>
              <BsHeart
                style={{ fontSize: '18px', marginRight: '7px', color: 'grey', marginTop:"4.5%" }}
              />
              FOLLOW
            </button>
            <div className={styles.socialMediaIcons}>
              <FaFacebookSquare />
              <FaTwitter/>
              <FaLink />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.smallImages}>
<img 
src="https://i3.ytimg.com/vi/EHrePiN5yeM/default.jpg" alt="" /><img 
src="https://i3.ytimg.com/vi/Q4vqNmhZJzg/default.jpg" alt="" /><img 
src="https://i3.ytimg.com/vi/Xa-Ziv7BEIo/default.jpg" alt="" /><img 
src="https://i3.ytimg.com/vi/jHJvky7YmxI/default.jpg" alt="" /><img 
src="https://i3.ytimg.com/vi/VHHSs1XMFhE/default.jpg" alt="" />
      </div>
{/* <----------------------------------Top Section Endes Here------------------------------------------------> */}
{/* <------------------------------------Story Section Starting---------------------------------------------> */}
    <div className={styles.storyTitleSection}>
      <p >STORY</p>
      <p>FAQ</p>
      <p>UPDATES</p>
      <p>DISCUSSION</p>

    </div>
    <SingleProductSection id={id}></SingleProductSection>
    </div>
  );
};

export default SingleProductPage;
