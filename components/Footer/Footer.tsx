import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { Epilogue } from "next/font/google";
const epilogue = Epilogue({ subsets: ["latin"] });
import Logo from "@/public/logo.svg";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <Image src={Logo} alt="logo" />
      <div className={`${styles.links} ${epilogue.className}`}>
        <Link href="#about" className={styles.link}>
          about us
        </Link>
        <Link href="#catalog" className={styles.link}>
          catalog
        </Link>
        <Link href="#sale" className={styles.link}>
          sale
        </Link>
      </div>
      <div className={`${styles.policy} ${epilogue.className}`}>
        <Link href="#" className={styles.policy_link}>
          Privacy Policy
        </Link>
        <Link href="#" className={styles.policy_link}>
          Terms of Service
        </Link>
      </div>
    </div>
  );
};

export default Footer;
