import Button from "../Button/Button";
import { useState } from "react";
import { BiSolidMessage } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import styles from './ContactForm.module.css';


export default function ContactForm() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);

  }

  return <>
    <div className="container-fluid ">
      <div className="row mt-4">
        <div className="col-md-6 ">
          <div className={`${styles.contact_css} p-2`}>
            <Button text="VIA SUPPORT CHAT" icon={<BiSolidMessage />} />
            <Button text="Call Me" icon={<IoCallSharp />} />
          </div>

          <div>
            <Button isOutline={true} text="VIA Email Form" icon={<MdEmail />} />
          </div>
          <div className="mt-4">
            <form onSubmit={onSubmit} className={styles.form_handle}>
              <div className={styles.form_control}>
                <label htmlFor="/">Name</label>
                <input type="text" />
              </div>
              <div className={styles.form_control}>
                <label htmlFor="/">Email</label>
                <input type="email" />
              </div>
              <div className={styles.form_control}>
                <label htmlFor="/">Text</label>
                <textarea name="text" rows="8" />
              </div>
              <div style={{ display: "flex", justifyContent: "end" }}>
                <Button text="Submit" />
              </div>

              <div>
                <table>
                  <tr>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{text}</td>
                  </tr>
                </table>

              </div>
            </form>

          </div>

        </div>
        <div className="col-md-6">
          <img src="public/images/contact.svg" alt="image" />
        </div>
      </div>
    </div>


  </>
}