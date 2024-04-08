import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./Card.module.scss";
import { Epilogue } from "next/font/google";
const epilogue = Epilogue({ subsets: ["latin"] });

interface ICardProps {
  title: String;
  price: String;
  img: StaticImageData;
}

const Card = ({ title, price, img }: ICardProps) => {
  return (
    <div className={styles.wrapper}>
      <Image src={img} alt="watch" className={styles.img} />
      <div className={`${styles.text} ${epilogue.className}`}>
        <div className={styles.title}>{title}</div>
        <div className={styles.price}>{price}</div>
      </div>
    </div>
  );
};

export default Card;
