import styles from './donationForm.module.css'
function DonationForm() {
  return (
    <>
        <div className={styles.donationForm_container}>
                <h2>Donation Form</h2>
                <div className={styles.form_container}>
                    <div className={styles.userInfo_wrapper}>
                        <label htmlFor="fullName">Donor Name:</label>
                        <input type="text" name='fullName'/>
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="" />
                    </div>
                    <div className={styles.address_wrapper}>
                        <label htmlFor="address">Address: </label>
                        <input type="text" name='address' placeholder='Enter your address'/>
                    </div>
                    <div className={styles.amount_wrapper}>
                            <input type="checkbox" name="" id="" />
                            <input type="checkbox" name="" id="" />
                            <input type="checkbox" name="" id="" />
                            <input type="checkbox" name="" id="" />
                            <input type="checkbox" name="" id="" />
                            <input type="checkbox" name="" id="" />
                    </div>
                    <div className={styles.payment_wrapper}>
                            <input type="checkbox" name="" id="" />
                            <input type="checkbox" name="" id="" />
                            <input type="checkbox" name="" id="" />
                    </div>  
                    <input type="submit" value="Donate Now" />
                </div>
        </div>
    </>
  )
}

export default DonationForm
