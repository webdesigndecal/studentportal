import Link from "next/link";
import styles from "./StyledLink.module.css";

type StyledLinkProps = {
  text: string;
  href: string;
};

export default function StyledLink(props: StyledLinkProps) {
  return (
    <Link href={props.href} className={styles.button}>
      {props.text}
    </Link>
  );
}
