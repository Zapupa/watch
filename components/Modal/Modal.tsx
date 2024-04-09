import React from "react";
import Image, { StaticImageData } from "next/image";
import closeImg from "@/public/x.svg";
import styles from "./Modal.module.scss";
import { Epilogue } from "next/font/google";
const epilogue = Epilogue({ subsets: ["latin"] });
import Card from "../Card/Card";
import Button from "../Button/Button";

interface IModalProps {
  title: String;
  price: String;
  img: StaticImageData;
}

const Modal = ({ title, price, img }: IModalProps) => {
  return (
    <div className={styles.wrapper}>
      <Image src={closeImg} alt="x" className={styles.close}></Image>
      <Card title={title} price={price} img={img} />
      <div className={`${styles.text} ${epilogue.className}`}>
        <div className={styles.text_areas}>
          <div className={styles.text_area}>
            <div className={styles.title}>Full name</div>
            <input
              className={styles.input}
              type="text"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className={styles.text_area}>
            <div className={styles.title}>Email</div>
            <input
              className={styles.input}
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className={styles.text_area}>
            <div className={styles.title}>Card number</div>
            <input
              className={styles.input}
              type="text"
              placeholder="Enter card"
              required
            />
          </div>
          <div className={styles.text_area}>
            <div className={styles.title}>Comments</div>
            <textarea
              className={`${styles.input} ${styles.textarea}`}
              placeholder="Enter your text"
            />
          </div>
        </div>
        <div className={styles.btn}>
          <Button>submit</Button>
          <div className={styles.btn_text}>
            By clicking on “Submit” button, you agree to our Privacy Policy, and
            allow Promodo to use this information for marketing purposes.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
