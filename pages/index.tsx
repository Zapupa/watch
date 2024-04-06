import Head from "next/head";
import Image from "next/image";
import { Inter, Roboto, Montserrat } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header/Header";
import bigImage from "@/public/biImage.png";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.text}>
          <h1 className={styles.title}>
            Welcome to our collection of premium watches
          </h1>
          <div className={styles.description}>
            Our watches are not just timepieces, but also an expression of your
            personality and lifestyle. From classic designs to modern ones, we
            have a watch to suit every taste and occasion.
          </div>
        </div>
        <div className={styles.imgs}>
          <div className={styles.slider}></div>
          <Image src={bigImage} alt="watch"></Image>
        </div>
      </main>
    </div>
  );
}
