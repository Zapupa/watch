import React from "react";
import styles from "./Button.module.scss";
import { Epilogue } from "next/font/google";
const epilogue = Epilogue({ subsets: ["latin"] });

interface IButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: IButtonProps) => {
  return (
    <button className={`${styles.btn} ${epilogue.className}`}>
      {children}
    </button>
  );
};

export default Button;
