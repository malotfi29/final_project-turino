import Image from "next/image";
import styles from "./not-found.module.css";
import Link from "next/link";

function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <Image
        className={styles.notFoundImg}
        src="/images/ErrorTV.png"
        width={1000}
        height={700}
        alt="NOT-FOUND"
      />
      <div>
        <h2>صفحه مورد نظر یافت نشد</h2>
        <button className="button-primary">
          <Link href="/">بازگشت به صفحه اصلی</Link>
        </button>
      </div>
    </div>
  );
}

export default NotFound;
