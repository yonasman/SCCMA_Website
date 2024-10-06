import styles from './donationForm.module.css'
function DonationForm() {
  return (
    <>
        <div className={styles.donationForm_container}>
                <h2>Donation Form</h2>
                <div className={styles.form_container}>
                    <div className={styles.userInfo_wrapper}>
                      <div>
                          <label htmlFor="fullName">Donor Name</label>
                          <input type="text" name='fullName' placeholder="Enter your Full Name" required/>
                      </div>
                      <div>
                        <label htmlFor="email">Email </label>
                        <input type="email" name="email" id="" placeholder="Enter your Email" required/>
                      </div>
                    </div>
                    <div className={styles.address_wrapper}>
                        <label htmlFor="address">Address </label>
                        <input type="text" name='address' placeholder='Enter your address'/>
                    </div>
                    <div className={styles.amount_wrapper}>
                            <p>Donation amount</p>
                            <div>
                              <div className={styles.top_radios}>
                                <div>
                                  <input type="radio" name="ten" id="" />
                                  <label htmlFor="">$10</label>
                                </div>
                                <div>
                                  <input type="radio" name="twenty" id="" />
                                  <label htmlFor="twenty">$20</label>
                                </div>
                                <div>
                                  <input type="radio" name="fifty" id="" />
                                  <label htmlFor="fifty">$50</label>
                                </div>
                              </div>
                              <div className={styles.bottom_radios}>
                                <div>
                                  <input type="radio" name="hundred" id="" />
                                  <label htmlFor="hundred">$100</label>
                                </div>
                                <div>
                                  <input type="radio" name="fiveHundred" id="" />
                                  <label htmlFor="fiveHundred">$500</label>
                                </div>
                                <div>
                                  <input type="radio" name="custom" id="" />
                                  <label htmlFor="custom">Custom</label>
                                </div>
                              </div>
                            </div>
                    </div>
                    <div className={styles.payment_wrapper}>
                            <p>Payment method</p>
                            <div>
                              <div className={styles.top_radios}>
                                <div>
                                    <input type="radio" name="paypal" id="" />
                                    <label htmlFor="paypal">Paypal</label>
                                </div>
                                <div>
                                    <input type="radio" name="chapa" id="" />
                                    <label htmlFor="chapa">Chapa</label>
                                </div>
                              </div>
                            </div>
                            <div className={styles.bottom_radios}>
                              <div>
                                  <input type="radio" name="masterCard" id="" />
                                  <label htmlFor="masterCard">MasterCard</label>
                              </div>
                            </div>
                    </div>  
                   <a href="#" className={styles.donate_btn}>Submit</a>
                </div>
        </div>
    </>
  )
}

export default DonationForm
