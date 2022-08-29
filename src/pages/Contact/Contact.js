import Footer from "../../components/Footer/Footer";
import styles from "./Contact.module.scss";

function Contact() {
  const formEventHandler = (e) => {
    e.preventDefault();
    console.log("hello");
  };

  return (
    <div className={styles.Contact}>
      <h1>Get In touch</h1>

      <form className={styles.ContactForm} onSubmit={formEventHandler}>
        <div>
          <label htmlFor="">Full Name</label>
          <input />
        </div>
        <div>
          <label htmlFor="">Email Address</label>
          <input />
        </div>
        <div>
          <label htmlFor="">Discord Handle</label>
          <input />
        </div>
        <div>
          <label htmlFor="">Social Media</label>
          <input />
        </div>
        <div>
          <label htmlFor="">Subject*</label>
          <input />
        </div>
        <div>
          <label htmlFor="">Message *</label>
          <textarea
            rows={10}
            placeholder={
              "Kindly tell us about yourself and your reason for contact?"
            }
          />
        </div>
        <button>Submit</button>
      </form>
      <Footer />
    </div>
  );
}

export default Contact;
