import React, { useCallback, useEffect, useRef, useState } from "react";
import type { MouseEventHandler } from "react";

import Portal, { createContainer } from "../Portal/Portal";
const MODAL_CONTAINER_ID = "modal-container-id";

import Image, { StaticImageData } from "next/image";
import closeImg from "@/public/x.svg";
import styles from "./Modal.module.scss";
import { useUnit } from "effector-react";
import { $modalState, modalOpener, modalCloser } from "@/stores/modal";
import { Epilogue } from "next/font/google";
const epilogue = Epilogue({ subsets: ["latin"] });
import Card from "../Card/Card";
import Button from "../Button/Button";
import { is } from "effector";

interface IModalProps {
  title: String;
  price: String;
  img: StaticImageData;
  onClose?: () => void;
}

const Modal = ({ title, price, img, onClose }: IModalProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    createContainer({ id: MODAL_CONTAINER_ID });
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleWrapperClick = (event: MouseEvent) => {
      const { target } = event;

      if (target instanceof Node && rootRef.current === target) {
        onClose?.();
      }
    };
    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    window.addEventListener("click", handleWrapperClick);
    window.addEventListener("keydown", handleEscapePress);

    return () => {
      window.removeEventListener("click", handleWrapperClick);
      window.removeEventListener("keydown", handleEscapePress);
    };
  }, [onClose]);

  const handleClose: MouseEventHandler<HTMLDivElement | HTMLButtonElement> =
    useCallback(() => {
      onClose?.();
    }, [onClose]);

  return isMounted ? (
    <Portal id={MODAL_CONTAINER_ID}>
      <div className={styles.container} ref={rootRef}>
        {" "}
        <div className={styles.wrapper}>
          <button className={styles.close} onClick={handleClose}>
            <Image src={closeImg} alt="x"></Image>
          </button>

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
                By clicking on “Submit” button, you agree to our Privacy Policy,
                and allow Promodo to use this information for marketing
                purposes.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  ) : null;
};

export default Modal;
