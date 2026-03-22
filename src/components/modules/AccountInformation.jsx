import styles from "./AccountInformation.module.css";

function AccountInformation() {
  return (
    <div className={styles.container}>
      <h2>اطلاعات حساب کاربری</h2>
      <div>
        <div className={styles.inputContainer}>
          <span>شماره موبایل</span>
          <input value="912000000" disabled />
        </div>
        <div className={styles.inputContainer}>
          <span>ایمیل</span>
          <input value="-" disabled />
        </div>
        <button>افزودن</button>
      </div>
    </div>
  );
}

export default AccountInformation;
