import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersionNumber";
import styles from "./TransactionsPage.module.css";

function TransactionsPage({ transactions }) {
  return (
    <>
      {!transactions.length?<p className={styles.noTransactions}>تراکنشی وجود ندارد</p>:
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
          {transactions.map((t) => (
            <tr key={t.id}>
              <td>{new Date(t.createdAt).toLocaleDateString("fa-IR")}</td>
              <td>{toPersianNumbersWithComma(t.amount)}</td>
              <td>ثبت نام در تور گردشگری</td>
              <td>سفارش {toPersianNumbers(t.id.slice(1, 8))}</td>
            </tr>
          ))}
        </tbody>
      </table>}
    </>
  );
}

export default TransactionsPage;
