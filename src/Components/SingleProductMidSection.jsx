import React, { useEffect, useRef, useState } from 'react';
import styles from '../Styles/SingleProductMidSection.module.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SingleProductSection = ({ id }) => {
  const navigate = useNavigate();
  const [singlProductData, setSingleProductData] = useState({});

  const productData = useSelector(
    state => state.productPageReducer.audioProjects
  );

  useEffect(() => {
    if (id) {
      const updatedProductData = productData.find(
        elem => elem.id === Number(id)
      );
      updatedProductData && setSingleProductData(updatedProductData);
    }
  }, [productData, id]);
  console.log("pef",singlProductData)

  const title1 = `${singlProductData.title} x 1`;
  const title2 = `${singlProductData.title} x 2`;
  const title3 = `${singlProductData.title} x 3`;
  const price = 299;
  const price1 = price * 1;
  const price2 = price * 2;
  const price3 = price * 3;
  const image1 = "https://c2.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_762,g_center,q_auto:best,dpr_1.5,f_auto,h_506/mpxk3ni2rijd5sffammm"
  const image2 = "https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_762,g_center,q_auto:best,dpr_1.5,f_auto,h_506/nz8a8ueek4jbbdwcnlj3" 
  const image3 = "https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_762,g_center,q_auto:best,dpr_1.5,f_auto,h_506/ckzudy3ajms4qo7msavo"

  const HandlePerk = (mainTitle, productTitle, productPrice, imageurl) => {

    console.log(mainTitle, productTitle, productPrice, imageurl)
    
    navigate('/paymentPage', {
      state: {
        name: mainTitle,
        productTitle: productTitle,
        productPrice: productPrice,
        imageurl:imageurl,
      },
    });
  };

  return (
    <div className={styles.midSectionImages}>
      <div className={styles.leftMidSectionImages}>
        <img src={singlProductData.image2} alt="image2" />
        <p>{singlProductData.description1}</p>
        <img src={singlProductData.image3} alt="image3" />
        <p>{singlProductData.description2}</p>
        <img src={singlProductData.image4} alt="image4" />
        <p>{singlProductData.description3}</p>
        <img src={singlProductData.image5} alt="image5" />
        <p>{singlProductData.description4}</p>
        <p>
          I have had the opportunity to review the Product’s User Instruction
          Manual (available upon request). I have been advised by Olive Union
          USA LLC that the Food and Drug Administration has determined that my
          best health interest would be served if I had a medical evaluation by
          a licensed physician (preferably a physician who specializes in
          diseases of the ear) before purchasing a hearing aid. I do not wish
          for a medical evaluation before purchasing a hearing aid.
        </p>
        <div className={styles.faqSection}>
          <b>Looking for more information? </b> Check the project <u> FAQ</u>
          <img src="https://emojipedia-us.s3.amazonaws.com/source/noto-emoji-animations/344/thinking-face_1f914.gif" />
        </div>
        <p>
          <u>Let us know</u> if you think this campaign contains{' '}
          <u>prohibited content.</u>
        </p>
      </div>

      <div className={styles.rightMidSectionImages}>
        <p className={styles.optionTitle}>Select an option</p>
        <div className={styles.rightSideDiv}>
          <img
            src={image1}
            alt="extra pic  "
          />
          <p>{title1}</p>
          <p>
            <b style={{ fontSize: '19px', marginRight: '1%' }}>{price1} USD</b>
            <span
              style={{
                fontSize: '19px',
                textDecoration: 'line-through',
                color: 'red',
                marginRight: '1%',
              }}
            >
              {' '}
              $549 USD
            </span>
            <span style={{ fontSize: '19px', color: 'red' }}>(45% OFF)</span>
            <p style={{ fontSize: '16px', color: 'grey', marginBottom: '1%' }}>
              ₹24,309 INR
            </p>
            <p className={styles.shippingText}>
              <b>Estimated Shipping</b>
            </p>
            <p>November 2022</p>
            <p>Only 6 left</p>
            <p>Ships worldwide.</p>
          </p>
          <button
            button
            onClick={() => HandlePerk(singlProductData.title, title1, price1, image1)}
          >
            GET THIS PERK
          </button>
        </div>
        <div className={styles.rightSideDiv}>
          <img
            src={image2}
            alt="extra pic  "
          />
          <p>{title2}</p>
          <p>
            <b style={{ fontSize: '28px', marginRight: '1%' }}>{price2} USD</b>
            <span
              style={{
                fontSize: '22px',
                textDecoration: 'line-through',
                color: 'red',
                marginRight: '1%',
              }}
            >
              {' '}
              $1,089 USD
            </span>
            <span style={{ fontSize: '22px', color: 'red' }}>(45% OFF)</span>
            <p style={{ fontSize: '20px', color: 'grey', marginBottom: '3%' }}>
              ₹24,309 INR
            </p>
            <p className={styles.shippingText}>
              <b>Estimated Shipping</b>
            </p>
            <p>November 2022</p>
            <p>Only 6 left</p>
            <p>Ships worldwide.</p>
          </p>
          <button
            button
            onClick={() => HandlePerk(singlProductData.title, title2, price2, image2)}
          >
            GET THIS PERK
          </button>
        </div>
        <div className={styles.rightSideDiv}>
          <img
            src={image3}
            alt="extra pic  "
          />
          <p>{title3}</p>
          <p>
            <b style={{ fontSize: '28px', marginRight: '1%' }}>{price3} USD</b>
            <span
              style={{
                fontSize: '22px',
                textDecoration: 'line-through',
                color: 'red',
                marginRight: '1%',
              }}
            >
              {' '}
              $1649 USD
            </span>
            <span style={{ fontSize: '22px', color: 'red' }}>(45% OFF)</span>
            <p style={{ fontSize: '20px', color: 'grey', marginBottom: '3%' }}>
              ₹24,309 INR
            </p>
            <p className={styles.shippingText}>
              <b>Estimated Shipping</b>
            </p>
            <p>November 2022</p>
            <p>Only 6 left</p>
            <p>Ships worldwide.</p>
          </p>
          <button
            onClick={() => HandlePerk(singlProductData.title, title3, price3, image3)}
          >
            GET THIS PERK
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductSection;
