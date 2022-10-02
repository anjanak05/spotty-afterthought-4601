import React, { useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import styles from '../Styles/PaymentPage.module.css';
import { FaAngleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {  Button } from '@chakra-ui/react';
import { AiFillLock } from 'react-icons/ai';
import { BsTriangle } from 'react-icons/bs';
import {useSelector} from "react-redux"

const PaymentPage = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');


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

  const handleBack = () => {
    navigate(-1);
  };
  const handleLoginPageRequest = () => {
    navigate('/Login');
  };

  const handlePaymentButton=()=>{
    navigate('/CheckoutPage');
  }
  return (
    <div id={styles.paymentPageContainer}>
      <div className={styles.paymentPageLeftSection}>
        <div>
          <p id={styles.addressSideTitle}>YOU'RE CONTRIBUTING TO</p>
          <p>
            {singlProductData.title}
          </p>
          <p onClick={handleBack}>
            <FaAngleLeft />
            <span
              style={{
                marginTop: '-0.5%',
                fontWeight: '300',
                fontSize: '17px',
              }}
            >
              Back
            </span>
          </p>
        </div>

        <p id={styles.createAccount}>
          <span style={{ fontWeight: '500',  fontSize: '19px',marginRight: '4%' }}>
            {' '}
            Guest checkout
          </span>
          Have an account?{' '}
          <span onClick={handleLoginPageRequest} style={{ color: '#8053a8' }}>
            <u>Log in</u>
          </span>
        </p>
        {/* <----------------------form starting------------------------> */}
        <div className={styles.emailName}>
          <div>
            <p>
              Full Name <span style={{ color: 'red' }}>*</span>
            </p>
            <input
              type="text"
              required
              name="name"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
            ></input>
          </div>
          <div>
            <p>
              Email Address <span style={{ color: 'red' }}>*</span>
            </p>
            <input
              type="text"
              required
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            ></input>
          </div>
        </div>
        <div>
          <input type="checkbox"></input>
          <p>Subscribe to the Indiegogo newsletter</p>
        </div>
        <p className={styles.shippingAddresss} >
          {' '}
          Shipping address
        </p>

        <div className={styles.shippingDetailse}>
          <div>
            <p>
              Full Name <span style={{ color: 'red' }}>*</span>
            </p>
            <input type="text" required ></input>
          </div>

          <div>
            <p>
              Country <span style={{ color: 'red' }}>*</span>
            </p>
            <input type="text" required placeholder='Type a shipping destination'></input>
          </div>
          <div>
            <p>
              City <span style={{ color: 'red' }}>*</span>
            </p>
            <input type="text" required ></input>
          </div>
          <div className={styles.emailName}>
            <div>
              <p>
                Street Address <span style={{ color: 'red' }}>*</span>
              </p>
              <input
                type="text"
                required
                
              ></input>
            </div>
            <div>
              <p>
                Address Line 2 <span style={{ color: 'red' }}>*</span>
              </p>
              <input
                type="text"
                required
                
              ></input>
            </div>
          </div>
          <div className={styles.emailName}>
            <div>
              <p>
                Postal Code <span style={{ color: 'red' }}>*</span>
              </p>
              <input
                type="text"
                required
                
              ></input>
            </div>
            <div>
              <p>
                Phone Number <span style={{ color: 'red' }}>*</span>
              </p>
              <input
                type="text"
                required
                
              ></input>
            </div>
          </div>
        </div>
        <p
          className={styles.shippingAddresss} 
        >
          {' '}
          Secure Payment < AiFillLock style={{marginTop:"0.7%", marginLeft:"10px"}} />
        </p>
        <div className={styles.shippingDetailse}>
          <div>
            <p>
              Name on Card <span style={{ color: 'red' }}>*</span>
            </p>
            <input type="text" required name="name" value=""></input>
          </div>

          <div style={{ marginBottom: '6%' }}>
            <p>
              Card Information <span style={{ color: 'red' }}>*</span>
            </p>
            <input
              type="text"
              required
              name="name"
              value=""
              placeholder="visa  "
            ></input>
          </div>
        </div>
      </div>

      {/* <-------------------------------Right Section of Paymen Page-------------------------------> */}
      <div className={styles.paymentPageRightSection}>
        <p id={styles.contriTitle}>Contribution summary</p>
        {/* <---------------Price section Top Starting--------> */}
        <div className={styles.priceSection}>
          <div className={styles.priceSectionImage}>
            <img src="https://c2.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_762,g_center,q_auto:best,dpr_1.5,f_auto,h_506/mpxk3ni2rijd5sffammm" alt="imagesofproducts" />
            <p>{singlProductData.title}</p>
          </div>
          <p>
            {' '}
            <p className={styles.price}>${299*2} USD</p>
            <p>₹43,008 INR</p>
          </p>
        </div>

        {/* <-----------------Top Price Section Ends here-------------> */}

        {/* <-----------------Top Subtotal Section Starting-------------> */}

        <div className={styles.subTotal}>
          <p>Subtotal</p>
          <div>
            <p className={styles.price}>${299*2} USD</p>
            <p>₹43,008 INR</p>
          </div>
        </div>
        <div className={styles.shipping}>
          <p>Shipping</p>
          <div>
            <p className={styles.price}>$- USD</p>
          </div>
        </div>
        {/* <-----------------Top Subtotal Section Ends here-------------> */}
        <input
          className={styles.countryArea}
          placeholder="Type a shipping destination"
        ></input>
        <div className={styles.shipping}>
          <div>
            <p style={{ fontSize: '20px', fontWeight: '700' }}>TOTAL</p>
            <p style={{ fontSize: '17px', color: '#949494' }}>
              Estimated Total
            </p>
          </div>
          <div>
            <p className={styles.price} style={{ marginTop: '4%' }}>
              ${299*2} USD
            </p>
            <p style={{ color: 'black' }}>₹43,008 INR</p>
          </div>
        </div>
        <div className={styles.paymentWarning}>
          <p>
            <b>The payment will be processed in United States, in USD.</b>{' '}
            Converted amounts are estimates and may differ from actual amount
            charged based on your card issuer's exchange rate.
          </p>
        </div>

        <div className={styles.donationWarning}>
          <p style={{ display: 'flex', fontSize:"15px" ,marginLeft: '10%', marginBottom: '8%' }}>
            <BsTriangle style={{marginTop:"1.3%", marginRight:"5px"}} />
            <b>Crowdfunding is not shopping</b>
          </p>
          <p>
            Your donation is a way to support a project but does not guarantee
            that you will receive a perk.
          </p>
          <p style={{ marginTop: '4%' }}>
            <b>
              You may request a full refund from Indiegogo until October 11,
              2022, unless the Campaign Owner has initiated shipping with a
              tracking number.
            </b>{' '}
            Any refunds after this date are the responsibility of the campaign
            owner, Olive Union, at their discretion.
          </p>
          <p style={{ marginTop: '6%', marginBottom: '3%' }}>
            <u>Learn more</u>
          </p>
        </div>

        <div className={styles.policy}>
          <input type="checkbox" required></input>
          <p>
            I agree to the{' '}
            <span style={{ color: '#e51075' }}>
              <u>Terms of Use</u>
            </span>{' '}
            and have read and understand the{' '}
            <span style={{ color: '#e51075', fontWeight:"500px" }}>
              <u>Privacy Policy</u>
            </span>
          </p>
        </div>
        <Button onClick={handlePaymentButton} >
        <AiFillLock style={{marginTop:"2%", marginRight:"10px"}} />
          Submit Payment
          </Button>
             
      </div>
    </div>
  );
};

export default PaymentPage;
