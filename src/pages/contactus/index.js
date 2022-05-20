import React, { useRef, useState } from "react";
// import axios from "axios";
import emailjs from "@emailjs/browser";
import Footer from "../../components/footer";
import Header from "../../components/header";
import styles from "./index.module.css";
import ReCAPTCHA from "react-google-recaptcha";

function Form({ form, submit, captcha, recaptchaRef, onChangeCaptcha }) {
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

            {captcha && (
              <div className={styles.form_submit} onClick={submit}>
                SUBMIT
              </div>
            )}

            <ReCAPTCHA
              ref={recaptchaRef}
              // size="invisible"
              sitekey="6LeaLwUgAAAAAIBN0ef2xzTx0rIfuLb1POyzr_ei"
              // sitekey="6Lf4RAUgAAAAAJbw7qXWVBfVtM2Ocggfs0KYGPjv"
              onChange={onChangeCaptcha}
            />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

function ContacUs() {
  const form = useRef();
  const recaptchaRef = React.createRef();
  const [captcha, setCaptcha] = useState(null);

  const onChangeCaptcha = (e) => {
    console.log(e, recaptchaRef.current.getValue());
    setCaptcha(e);
  };

  const submit = () => {
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
      <Form
        submit={submit}
        form={form}
        captcha={captcha}
        recaptchaRef={recaptchaRef}
        onChangeCaptcha={onChangeCaptcha}
      />
    </div>
  );
}

export default ContacUs;

/*
6LeaLwUgAAAAAIBN0ef2xzTx0rIfuLb1POyzr_ei
6LeaLwUgAAAAAC4gEFxjtiJYzkWCRGu08HaUHu-W
*/
