import Footer from "../../components/Footer/Footer";
import styles from "./Contact.module.scss";
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("xyyvzvqb");

  const redirect = () => {
    setTimeout(() => {
      window.location.href = "/";
    }, 5000);
  }

  if (state.succeeded) {
    // Show a pop up card saying that the form has been submitted successfully
    // and that we will get back to you soon.
    return (
      <div className={styles.Contact}>
        <div className="container">
          <h1>Thank you for contacting us!</h1>
        </div>
        {/* Redirect to homepage in 5 seconds... */}
       {redirect()}
      </div>
    );
  }

  return (
    <div className={styles.Contact}>
      <h1>Get In touch</h1>

      <form className={styles.ContactForm} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name<span className={styles.Required}>*</span></label>
          <input 
            id="fullName"
            name="fullName"
            type="text"
            required
          />
          <ValidationError 
            prefix="Full Name" 
            field="fullName"
            errors={state.errors}
          />
        </div>
        <div>
          <label htmlFor="email">Email Address<span className={styles.Required}>*</span></label>
          <input  id="email"
            type="email" 
            name="email"
            required
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </div>
        <div>
          <label htmlFor="discordHandle">Discord Handle</label>
          <input 
              id="discordHandle"
              name="discordHandle"
              type="text"
          />
          <ValidationError 
            prefix="Discord Handle" 
            field="discordHandle"
            errors={state.errors}
          />
        </div>
        <div>
          <label htmlFor="twitter">Twitter Handle<span className={styles.Required}>*</span></label>
          <input 
              id="twitter"
              name="twitter"
              type="text"
              required
          />
          <ValidationError 
            prefix="Twitter Handle" 
            field="twitter"
            errors={state.errors}
          />
        </div>
        <div>
          <label htmlFor="subject">Subject<span className={styles.Required}>*</span></label>
          <input 
            id="subject"
            name="subject"
            type="text"
            required
          />
          <ValidationError 
            prefix="Subject" 
            field="subject"
            errors={state.errors}
          />
        </div>
        <div>
          <label htmlFor="message">Message<span className={styles.Required}>*</span></label>
          <textarea
            id="message"
            name="message"
            rows={10}
            placeholder={
              "Kindly tell us about yourself and your reason for contact?"
            }
            required
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </div>
        <button type="submit" disabled={state.submitting}>Submit</button>
      </form>
      <Footer />
    </div>
  );
}

export default Contact;
