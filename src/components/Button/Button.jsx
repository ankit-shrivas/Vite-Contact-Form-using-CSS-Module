
import styles from './Button.module.css';
export default function Button({ isOutline, text, icon, }) {
  //const { isOutline, text, icon } = props; {...rest}
  return <>

    <div>
      <button className={isOutline ? styles.outLine_btn : styles.btn_primary}>{icon} {text} </button>
    </div>

  </>
}