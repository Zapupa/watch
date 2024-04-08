import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./Modal.module.scss";
import { Epilogue } from "next/font/google";
const epilogue = Epilogue({ subsets: ["latin"] });
import Card from "../Card/Card";

interface IModalProps {
  title: String;
  price: String;
  img: StaticImageData;
}

const Modal = ({ title, price, img }: IModalProps) => {
  return (
    <div className={styles.wrapper}>
      <Card title={title} price={price} img={img} />
    </div>
  );
};

export default Modal;
