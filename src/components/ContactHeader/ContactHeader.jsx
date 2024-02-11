import styles from './ContactHeader.module.css';
//console.log(styles.contact_section);

export default function ContactHeader() {

  return <>
    <div className={`${styles.contact_section} container`}>
      <h1>
        Contact Us
      </h1>
      <p>
        make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
  </>
}