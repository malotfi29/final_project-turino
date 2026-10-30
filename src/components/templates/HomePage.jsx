import styles from "./HomePage.module.css";
import AllToures from "@/modules/AllToures";
import PhoneContainer from "@/modules/PhoneContainer";
import WhyTorino from "@/modules/WhyTorino";
import Footer from "@/modules/Footer";

function HomePage() {
  return (
    <main className={styles.container}>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>EXPLORE • DISCOVER • EXPERIENCE</p>
          <h1 id="hero-title">
            Your Next Adventure <span>Starts Here</span>
          </h1>
          <p className={styles.description}>
            Discover amazing destinations, unforgettable experiences and create
            memories that last a lifetime.
          </p>
        </div>
      </section>

      <AllToures />
      <PhoneContainer />
      <section className={styles.whyTorino} id="features">
        <WhyTorino />
      </section>
      <footer className={styles.footer} id="contact">
        <Footer />
      </footer>
    </main>
  );
}

export default HomePage;
