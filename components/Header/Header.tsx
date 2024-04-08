import React from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import { Epilogue } from "next/font/google";
import logo from "@/public/logoDesktop.png";
import Link from "next/link";
import Button from "../Button/Button";
const epilogue = Epilogue({ subsets: ["latin"] });

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <Image src={logo} alt="thewatchspot" className={styles.logo} />
        <div className={`${styles.navbar} ${epilogue.className}`}>
          <Link href="#" className={styles.navbar_item}>
            About us
          </Link>
          <Link href="#" className={styles.navbar_item}>
            Catalog
          </Link>
          <Link href="#" className={styles.navbar_item}>
            Sale
          </Link>
        </div>
      </div>

      <Button>Get in touch</Button>
    </div>
  );
};

export default Header;
