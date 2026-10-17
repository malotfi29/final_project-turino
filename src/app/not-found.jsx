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
      <h2>Page Not Found</h2>
        <button className="button-primary">
        <Link href="/">Back to Home</Link>
        </button>
      </div>
    </div>
  );
}

export default NotFound;
