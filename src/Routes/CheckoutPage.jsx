import { Radio, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import styles from "../Styles/CheckoutPage.module.css"
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
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
        <div className={styles.mainContainerR}>
          <div className={styles.mainContinerR1}>
              <div className={styles.youContribution}>You're contributing to</div>
              <div className={styles.deagonfly}>Deagonfly - Ride the World's First Hyperscooter</div>
              <div className={styles.payflow_backbutton}>Back</div>
              <div className={styles.payoff_logindata}>
                <div >
                  <img src="https://g2.iggcdn.com/assets/individuals/missing/thumbnail-deaf450c2d4183b9309b493f6a7b20d62f8d31617ec828d060df465abe92ef2a.png" alt="" style={{ "border-radius":"50px"}} />
                </div>
                <div>
                  <div className={styles.payoff_logindata1} > Name </div>
                  <div className={styles.payoff_logindata1} > Email </div>
                </div>
              </div>
              <div className={styles.payflow_shipping}>Shipping Address</div>
              <div className={styles.payflow_newAdress}> <Radio></Radio> New Address</div>
              <div className={styles.payflow_box1}>
                <div className={styles.payflow_fullname}>Full Name*</div>
                <div><input type="text" className={styles.payflow_inputbox} /></div>
                <div className={styles.payflow_fullname}>Country*</div>
                <div><input type="text" className={styles.payflow_inputbox} /></div>
                <div className={styles.payflow_fullname}>Street Address*</div>
                <div><input type="text" className={styles.payflow_inputbox} /></div>
                <div className={styles.payflow_fullname}>City</div>
                <div><input type="text" className={styles.payflow_inputbox} /></div>
                <div className={styles.payflow_fullname}>Postal Code*</div>
                <div><input type="text" className={styles.payflow_inputbox} /></div>
                <div className={styles.payflow_fullname}>Phone Number*</div>
                <div><input type="text" className={styles.payflow_inputbox} /></div>
              </div>

              <br />

              <div className={styles.payflow_shipping}>Secure Payment </div>
              <div className={styles.payflow_box1}>
                <div className={styles.payflow_fullname}>Card number</div>
                <div><input type="text" className={styles.payflow_inputbox} placeholder="1234 1234 1234 1234" /></div>
                <div className={styles.payflow_fullname}>Expiration</div>
                <div><input type="text" className={styles.payflow_inputbox} placeholder="MM / YY" /></div>
                <div className={styles.payflow_fullname}>CVC</div>
                <div><input type="text" className={styles.payflow_inputbox} placeholder="CVC Number" /></div>
                <div className={styles.payflow_fullname}>Country</div>
                <div><input type="text" className={styles.payflow_inputbox} placeholder="INDIA" /></div>
              </div>

              <div className={styles.payflow_fullname}>Add a tip Indiegogo</div>
              <div>By supporting Indiegogo, you are hepling us bring the power of community to <br /> important causes around the world. </div>
              <div className={styles.payflow_newAdress}> <Radio></Radio> 10%($175 GBP)</div>
              <div className={styles.payflow_newAdress}> <Radio></Radio> 15%($263 GBP)</div>
              <div className={styles.payflow_newAdress}> <Radio></Radio> 20%($350 GBP)</div>
              <div className={styles.payflow_newAdress}> <Radio></Radio> Other Amount</div>
          </div>
          <div>
            <div className={styles.seconContainerPayoff}>
              <div className={styles.payflow_fullname}>Contribution summary</div>
              <div className={styles.payoffContinnerflex}>
                <div className={styles.payoff_images}>
                  <img src="https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_72,g_center,q_auto:eco,dpr_1.0,f_auto,h_48/ogih9n8n0xrm8mpkqvku" alt="" />
                </div>
                <div className={styles.payflow_box1containe}>1X Dragonfly DF</div>
                <div className={styles.payflow_fullname}>$1,750 GBP</div>
              </div>
              <hr />
              <div className={styles.payoffContinnerflex}>
                <div className={styles.payflow_shippingtiles}>SubTotal</div>
                <div className={styles.payflow_fullname}>$1,750 GBP</div>
              </div>

              <div className={styles.payoffContinnerflex}>
                <div className={styles.payflow_shippingtiles}>Shipping</div>
                <div className={styles.payflow_fullname}>$-GBP</div>
              </div>

              <div>
                <input type="text" className={styles.payflow_inputbox} placeholder="Type a shipping destination"/>
              </div>

              <div className={styles.payoffContinnerflex}>
                <div className={styles.payflow_shippingtiles}>Indiegogo Tip</div>
                <div className={styles.payflow_fullname}>$ 236 GBP</div>
              </div>

              <div className={styles.payoffContinnerflex}>
                <div className={styles.payoff_Total}>TOTAL</div>
                <div className={styles.payoff_Total}>$ {2013} GBP</div>
              </div>

              <div>
                <button className={styles.payoff_submitButton}>Submit Payment</button>

              <Button onClick={onOpen} className={styles.payoff_submitButton}>Submit Payment</Button>
              <Modal isOpen={isOpen} onClose={onClose}>
               <ModalOverlay />
               <ModalContent>
          
            <ModalHeader>Payment SucessFul</ModalHeader>
            <ModalHeader>Thank You</ModalHeader>
            <ModalCloseButton />
              <ModalBody>
              {/* <Lorem count={2} /> */}
             </ModalBody>

              <ModalFooter>
                <Link to='/'>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                  Close
                </Button>
                </Link>
                {/* <Button variant='ghost'>Secondary Action</Button> */}
              </ModalFooter>
            </ModalContent>
          </Modal>
              </div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default CheckoutPage