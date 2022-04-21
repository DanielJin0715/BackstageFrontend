import React, { useState } from "react";
import axios from "axios";
import Footer from "../../components/footer";
import Header from "../../components/header";
import styles from "./index.module.css";

// const api = axios.create();

// api.interceptors.request.use(
//   (request) => {
//     let baseURL = "http://localhost:3000";
//     request.url = baseURL + request.url;
//     return request;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

function Form({ submit }) {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = () => {
    submit({ name, surName, phoneNumber, email, organization, message });
  };

  return (
    <div className={styles.form_wrapper}>
      <div className={styles.form}>
        <div className={styles.form_title}>Contact Us</div>
        <div className={styles.form_group}>
          <div className={styles.input_sect}>
            <div className={styles.form_label}>Name</div>
            <input
              className={styles.form_input}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.input_sect}>
            <div className={styles.form_label}>Surmame</div>
            <input
              className={styles.form_input}
              value={surName}
              onChange={(e) => setSurName(e.target.value)}
            />
          </div>
          <div className={styles.input_sect}>
            <div className={styles.form_label}>Phone Number</div>
            <input
              className={styles.form_input}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className={styles.input_sect}>
            <div className={styles.form_label}>Email</div>
            <input
              className={styles.form_input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.input_sect}>
            <div className={styles.form_label}>Organization</div>
            <input
              className={styles.form_input}
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
            />
          </div>
          <div className={styles.input_sect}>
            <div className={styles.form_label}>Message</div>
            <textarea
              className={styles.form_textarea}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className={styles.form_submit} onClick={onSubmit}>
            SUBMIT
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function ContacUs() {
  const submit = ({
    name,
    surName,
    phoneNumber,
    email,
    organization,
    message,
  }) => {
    console.log("request sent");
    return new Promise((resolve, reject) => {
      axios
        .post(
          "http://ec2-3-143-0-249.us-east-2.compute.amazonaws.com:3000/api/auth/send_email",
          {
            name,
            surName,
            phoneNumber,
            email,
            organization,
            message,
          }
        )
        .then((res) => {
          console.log(res.data);
          // if (res.data.success === true) {
          alert("Registered successfully");
          // }
          resolve();
        })
        .catch((err) => {
          console.log(err);
          reject();
        });
    });
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
      <Form submit={submit} />
    </div>
  );
}

export default ContacUs;
