import styles from "./AccountInformation.module.css";

function PersonalInformation() {
  return (
    <div className={styles.container}>
      <div>
        <h2>اطلاعات شخصی</h2>
        <button>ویرایش اطلاعات</button>
      </div>
      <div>
        <div className={styles.inputContainer}>
          <span>نام و نام خانوادگی</span>
          <input value="مونا حیدری" disabled />
        </div>
        <div className={styles.inputContainer}>
          <span>کدملی</span>
          <input value="-" disabled />
        </div>
        <div className={styles.inputContainer}>
          <span>جنسیت</span>
          <input value="-" disabled />
        </div>
        <div className={styles.inputContainer}>
          <span>تاریخ تولد</span>
          <input value="-" disabled />
        </div>
      </div>
    </div>
  );
}

export default PersonalInformation;
