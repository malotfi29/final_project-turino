import styles from "./AccountInformation.module.css";

function BankInformation() {
  return (
    <div className={styles.container}>
      <div>
        <h2>اطلاعات حساب بانکی</h2>
        <button>ویرایش اطلاعات</button>
      </div>
      <div>
        <div className={styles.inputContainer}>
          <span>شماره شبا</span>
          <input value="مونا حیدری" disabled />
        </div>
        <div className={styles.inputContainer}>
          <span>شماره حساب</span>
          <input value="-" disabled />
        </div>
        <div className={styles.inputContainer}>
          <span>شماره کارت</span>
          <input value="-" disabled />
        </div>
        
      </div>
    </div>
  )
}

export default BankInformation
