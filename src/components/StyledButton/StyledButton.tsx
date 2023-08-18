import styles from "./StyledButton.module.css";

type StyledButtonProps = {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => any;
};

export default function StyledButton(props: StyledButtonProps) {
  return (
    <button onClick={props.onClick} type={props.type} className={styles.button}>
      {props.text}
    </button>
  );
}
