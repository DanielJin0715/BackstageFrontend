import React, { useRef } from "react";
// import axios from "axios";
import emailjs from "@emailjs/browser";
import Footer from "../../components/footer";
import Header from "../../components/header";
import styles from "./index.module.css";

function Form({ form, submit }) {
  return (
    <div className={styles.form_wrapper}>
      <div className={styles.form}>
        <div className={styles.form_title}>Contact Us</div>
        <form ref={form}>
          <div className={styles.form_group}>
            <div className={styles.input_sect}>
              <div className={styles.form_label}>Name</div>
              <input className={styles.form_input} type="text" name="name" />
            </div>
            <div className={styles.input_sect}>
              <div className={styles.form_label}>Surmame</div>
              <input className={styles.form_input} type="text" name="surName" />
            </div>
            <div className={styles.input_sect}>
              <div className={styles.form_label}>Phone Number</div>
              <input
                className={styles.form_input}
                type="text"
                name="phoneNumber"
              />
            </div>
            <div className={styles.input_sect}>
              <div className={styles.form_label}>Email</div>
              <input className={styles.form_input} type="email" name="email" />
            </div>
            <div className={styles.input_sect}>
              <div className={styles.form_label}>Organization</div>
              <input
                className={styles.form_input}
                type="text"
                name="organization"
              />
            </div>
            <div className={styles.input_sect}>
              <div className={styles.form_label}>Message</div>
              <textarea className={styles.form_textarea} name="message" />
            </div>

            <div className={styles.form_submit} onClick={submit}>
              SUBMIT
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

function ContacUs() {
  const form = useRef();

  const submit = () => {
    console.log("request sent");
    emailjs
      .sendForm(
        "service_erw2ld9",
        "template_75tt6ir",
        form.current,
        "-dCe7JmPnoBko-5QM"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Successfully registered!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    emailjs
      .sendForm(
        "service_erw2ld9",
        "template_v29fwqf",
        form.current,
        "-dCe7JmPnoBko-5QM"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Successfully registered!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: `url('/images/roadmap_back.png')`,
        backgroundSize: "cover",
      }}
    >
      <Header />
      <Form submit={submit} form={form} />
    </div>
  );
}

export default ContacUs;
