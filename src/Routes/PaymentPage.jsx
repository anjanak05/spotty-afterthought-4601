import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../Styles/PaymentPage.module.css';
import { FaAngleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Heading, useDisclosure } from '@chakra-ui/react';
import { AiFillLock } from 'react-icons/ai';
import { BsTriangle } from 'react-icons/bs';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Lorem,
} from '@chakra-ui/react'

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure()
 console.log(location);
  const handleBack = () => {
    navigate(-1);
  };
  const handleLoginPageRequest = () => {
    navigate('/Login');
  };

  const handleCheckoutNavigate=()=>{
    navigate('/CheckoutPage');
  }
  return (
    <div id={styles.paymentPageContainer}>
      <div className={styles.paymentPageLeftSection}>
        <div>
          <p id={styles.addressSideTitle}>YOU'RE CONTRIBUTING TO</p>
          <p>{location.state.name}</p>
          <p onClick={handleBack}>
            <FaAngleLeft />
            <span
              style={{
                marginTop: '-0.2%',
                fontWeight: 'normal',
                fontSize: '22px',
              }}
            >
              Back
            </span>
          </p>
        </div>

        <p id={styles.createAccount}>
          <span style={{ fontWeight: 'bold', marginRight: '2%' }}>
            {' '}
            Guest checkout
          </span>
          Have an account?{' '}
          <span onClick={handleLoginPageRequest} style={{ color: 'purple' }}>
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
        <Heading as="h3" size="lg" marginBottom="4%" marginTop="4%">
          {' '}
          Shipping address
        </Heading>

        <div className={styles.shippingDetailse}>
          <div>
            <p>
              Full Name <span style={{ color: 'red' }}>*</span>
            </p>
            <input type="text" required name="name" value=""></input>
          </div>

          <div>
            <p>
              Country <span style={{ color: 'red' }}>*</span>
            </p>
            <input type="text" required name="name" value=""></input>
          </div>
          <div>
            <p>
              City <span style={{ color: 'red' }}>*</span>
            </p>
            <input type="text" required name="name" value=""></input>
          </div>
          <div className={styles.emailName}>
            <div>
              <p>
                Street Address <span style={{ color: 'red' }}>*</span>
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
                Address Line 2 <span style={{ color: 'red' }}>*</span>
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
          <div className={styles.emailName}>
            <div>
              <p>
                Postal Code <span style={{ color: 'red' }}>*</span>
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
                Phone Number <span style={{ color: 'red' }}>*</span>
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
        </div>
        <Heading
          as="h3"
          size="lg"
          marginBottom="4%"
          marginTop="4%"
          display="flex"
        >
          {' '}
          Secure Payment < AiFillLock style={{marginTop:"0.5%", marginLeft:"10px"}} />
        </Heading>
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
              placeholder="VISA 9999 9999 9999 9999 "
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
            <img src={location.state.imageurl} alt="imagesofproducts" />
            <p>{location.state.productTitle}</p>
          </div>
          <p>
            {' '}
            <p className={styles.price}>${location.state.productPrice} USD</p>
            <p>₹43,008 INR</p>
          </p>
        </div>

        {/* <-----------------Top Price Section Ends here-------------> */}

        {/* <-----------------Top Subtotal Section Starting-------------> */}

        <div className={styles.subTotal}>
          <p>Subtotal</p>
          <div>
            <p className={styles.price}>${location.state.productPrice} USD</p>
            <p>₹43,008 INR</p>
          </div>
        </div>
        <div className={styles.shipping}>
          <p>Shipping</p>
          <div>
            <p className={styles.price}>$— USD</p>
          </div>
        </div>
        {/* <-----------------Top Subtotal Section Ends here-------------> */}
        <input
          className={styles.countryArea}
          placeholder="Type a shipping destination"
        ></input>
        <div className={styles.shipping}>
          <div>
            <p style={{ fontSize: '26px', fontWeight: 'bold' }}>Total</p>
            <p style={{ fontSize: '22px', color: '#949494' }}>
              Estimated Total
            </p>
          </div>
          <div>
            <p className={styles.price} style={{ marginTop: '4%' }}>
              ${location.state.productPrice} USD
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
          <p style={{ display: 'flex', marginLeft: '12%', marginBottom: '8%' }}>
            <BsTriangle />
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
          <input type="checkbox"></input>
          <p>
            I agree to the{' '}
            <span style={{ color: '#e51075' }}>
              <u>Terms of Use</u>
            </span>{' '}
            and have read and understand the{' '}
            <span style={{ color: '#e51075' }}>
              <u>Privacy Policy</u>
            </span>
          </p>
        </div>
        <Button onClick={onOpen} >
        <AiFillLock style={{marginTop:"2%", marginRight:"30px"}} />
          Submit Payment
          </Button>
              <Modal isOpen={isOpen} onClose={onClose}>
               <ModalOverlay />
               <ModalContent>
          
            <ModalHeader>Payment SucessFul</ModalHeader>
            <ModalHeader>Thank You</ModalHeader>
            <ModalCloseButton />
              <ModalBody>
             </ModalBody>

              <ModalFooter>
                <Link to='/'>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                  Close
                </Button>
                </Link>
              </ModalFooter>
            </ModalContent>
          </Modal>
      </div>
    </div>
  );
};

export default PaymentPage;
