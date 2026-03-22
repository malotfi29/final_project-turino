import styles from "./TransactionsPage.module.css"

function TransactionsPage() {
  const date = new Date().toLocaleDateString("fa-IR");
  return (
    <table className={styles.container}>
      <thead>
        <tr>
        <th>تاریخ و ساعت</th>
        <th>مبلغ (تومان)</th>
        <th>نوع تراکنش</th>
        <th>شماره سفارش</th>
        </tr>
        
      </thead>
      <tbody>

     
      <tr>
        <td>{date}</td>
        <td>1200000</td>
        <td>ثبت نام در تور گردشگری</td>
        <td>سفارش 123456</td>
      </tr>
      <tr>
        <td>{date}</td>
        <td>1200000</td>
        <td>ثبت نام در تور گردشگری</td>
        <td>سفارش 123456</td>
      </tr><tr>
        <td>{date}</td>
        <td>1200000</td>
        <td>ثبت نام در تور گردشگری</td>
        <td>سفارش 123456</td>
      </tr><tr>
        <td>{date}</td>
        <td>1200000</td>
        <td>ثبت نام در تور گردشگری</td>
        <td>سفارش 123456</td>
      </tr><tr>
        <td>{date}</td>
        <td>1200000</td>
        <td>ثبت نام در تور گردشگری</td>
        <td>سفارش 123456</td>
      </tr><tr>
        <td>{date}</td>
        <td>1200000</td>
        <td>ثبت نام در تور گردشگری</td>
        <td>سفارش 123456</td>
      </tr>
      </tbody>
    </table>
  );
}

export default TransactionsPage;
