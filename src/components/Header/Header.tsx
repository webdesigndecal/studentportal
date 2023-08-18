"use client";

import Image from "next/image";
import logo from "../../../public/logo.svg";
import styles from "./Header.module.css";
import StyledButton from "../StyledButton/StyledButton";
import Link from "next/link";
import { useUserContext } from "@/contexts/userContext";

export default function Header() {
  const { user, setUser } = useUserContext();
  const handleLogOut = () => {
    setUser(null);
  };

  return (
    <header className={styles.headerContainer}>
      <Link className={styles.logoContainer} href="/">
        <Image className={styles.logo} src={logo} alt="WDD Logo" />
      </Link>
      <StyledButton
        text="Log Out"
        type="button"
        onClick={() => handleLogOut()}
      />
    </header>
  );
}
