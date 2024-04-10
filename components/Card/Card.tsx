import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Modal from "../Modal/Modal";
import styles from "./Card.module.scss";
import { Epilogue } from "next/font/google";
const epilogue = Epilogue({ subsets: ["latin"] });

interface ICardProps {
  title: String;
  price: String;
  img: StaticImageData;
}

const Card = ({ title, price, img }: ICardProps) => {
  const [isModalActive, setModalActive] = useState(false);

  const handleModalOpen = () => {
    setModalActive(true);
  };
  const handleModalClose = () => {
    setModalActive(false);
  };
  return (
    <div className={styles.wrapper} onClick={handleModalOpen}>
      <Image src={img} alt="watch" className={styles.img} />
      <div className={`${styles.text} ${epilogue.className}`}>
        <div className={styles.title}>{title}</div>
        <div className={styles.price}>{price}</div>
      </div>
      {isModalActive && (
        <Modal
          title={title}
          price={price}
          img={img}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default Card;
