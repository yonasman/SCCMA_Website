import styles from './contactForm.module.css'

function ContactForm() {
  return (
    <>
      <div className={styles.contactForm_container}>
            <h2>Join or Contact Us</h2>
            <div className={styles.form_container}>
                    <div className={styles.name_container}>
                            <div>
                                <label htmlFor="firstName" required>First Name <span>*</span></label>
                                <input type="text" placeholder='John' />
                            </div>
                            <div>
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" placeholder='Abel' />
                            </div>
                    </div>
                    <div className={styles.email_container}>
                            <label htmlFor="email">Email <span>*</span></label>
                            <input type="text" name="" id="" placeholder='sara@gmail.com' />
                    </div>
                    <div className={styles.phone_container}>
                            <label htmlFor="phone">Phone</label>
                            <input type="text" name="phone" id="" placeholder='+251993923931' />
                    </div>
                    <div className={styles.textarea_container}>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id=""></textarea>
                    </div>
                    <div className={styles.submit_btn}>
                        <input type="submit" name="" id="" placeholder='Submit' />
                    </div>
            </div>
      </div>
    </>
  )
}

export default ContactForm
