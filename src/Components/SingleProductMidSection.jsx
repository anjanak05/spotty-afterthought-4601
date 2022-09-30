import React, { useEffect, useState } from 'react';
import styles from '../Styles/SingleProductMidSection.module.css';
import { useSelector } from 'react-redux';

const SingleProductSection = ({ id }) => {
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
            src="https://c2.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_762,g_center,q_auto:best,dpr_1.5,f_auto,h_506/mpxk3ni2rijd5sffammm"
            alt="extra pic  "
          />
          <p>Olive Max x 1 Super Early Bird</p>
          <p>
            <b style={{ fontSize: '28px', marginRight: '1%' }}>$299 USD</b>
            <span
              style={{
                fontSize: '22px',
                textDecoration: 'line-through',
                color: 'red',
                marginRight: '1%',
              }}
            >
              {' '}
              $549 USD
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
          <button>GET THIS PERK</button>
        </div>
        <div className={styles.rightSideDiv}>
          <img
            src="https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_762,g_center,q_auto:best,dpr_1.5,f_auto,h_506/nz8a8ueek4jbbdwcnlj3"
            alt="extra pic  "
          />
          <p>Olive Max x 2 Super Early Bird</p>
          <p>
            <b style={{ fontSize: '28px', marginRight: '1%' }}>$529 USD</b>
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
          <button>GET THIS PERK</button>
        </div>
        <div className={styles.rightSideDiv}>
          <img
            src="https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_762,g_center,q_auto:best,dpr_1.5,f_auto,h_506/ckzudy3ajms4qo7msavo"
            alt="extra pic  "
          />
          <p>Olive Max x 3 Super Early Bird</p>
          <p>
            <b style={{ fontSize: '28px', marginRight: '1%' }}>$659 USD</b>
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
          <button>GET THIS PERK</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductSection;
