import Head from "next/head";
import Image from "next/image";
import { Inter, Roboto, Montserrat, Epilogue } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header/Header";
import bigImage from "@/public/biImage.png";
import Slider from "@/components/Slider/Slider";
const epilogue = Epilogue({ subsets: ["latin"] });

import Card from "@/components/Card/Card";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.main_bg}>
        <div className={styles.main_page}>
          <Header />
          <main className={styles.main}>
            <div className={styles.text}>
              <h1 className={`${styles.title} ${epilogue.className}`}>
                Welcome to our collection of premium watches
              </h1>
              <div className={`${styles.description} ${epilogue.className}`}>
                Our watches are not just timepieces, but also an expression of
                your personality and lifestyle. From classic designs to modern
                ones, we have a watch to suit every taste and occasion.
              </div>
            </div>
            <div className={styles.imgs}>
              <div className={styles.slider}>
                <Slider />
              </div>
              <Image src={bigImage} alt="watch"></Image>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
