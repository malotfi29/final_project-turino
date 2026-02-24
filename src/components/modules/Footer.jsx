import TiketIcon from "@/public/icons/TiketIcon";
import styles from "./Footer.module.css"
import Image from "next/image";
import { data } from "@/constants/footerData";


function Footer() {
  return <div className={styles.container}>
    {
        data.map(item=> <div className={styles.item} key={item.id} >
            <Image className={styles.img} src={item.src}  width={1000} height={700} alt="ticket"/>
            <div className={styles.itemDesc}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            </div>
        </div>)
    }
  </div>;
}

export default Footer;
