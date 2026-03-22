import styles from "./MyTour.module.css";

function MyTour() {
  return (
    <div className={styles.container}>
      <div className={styles.desc}>
        <div>
          <p>تور اقلیم کردستان</p>
          <p>سفر با هواپیما</p>
          <p>
            تهران به سلیمانیه  <span>دوشنبه 14 فروردین 1402</span>
          </p>
          <p>
            تاریخ برگشت  <span>چهارشنبه 19 فروردین 1402</span>
          </p>
        </div>
        <button className="badge-success">به اتمام رسیده</button>
      </div>
      <div className={styles.price}>
        <p>
          شماره تور <span>123456</span>
        </p>
        <p>
          مبلغ پرداخت شده <span>1478520000 <span>تومان</span></span>
        </p>
      </div>
    </div>
  );
}

export default MyTour;
