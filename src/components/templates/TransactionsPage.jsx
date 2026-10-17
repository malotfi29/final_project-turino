import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersionNumber";
import styles from "./TransactionsPage.module.css";

function TransactionsPage({ transactions }) {
  return (
    <>
      {!transactions.length?<p className={styles.noTransactions}>`No transactions found`</p>:
      <table className={styles.container}>
        <thead>
          <tr>
            <th>Date & Time</th>
            <th>price</th>
            <th>Transaction type</th>
            <th>Order Number</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id}>
              <td>{new Date(t.createdAt).toLocaleDateString("en-US")}</td>
              <td>{t.amount}$</td>
              <td>Book a Tour</td>
              <td>Order {t.id.slice(1, 8)}</td>
            </tr>
          ))}
        </tbody>
      </table>}
    </>
  );
}

export default TransactionsPage;
