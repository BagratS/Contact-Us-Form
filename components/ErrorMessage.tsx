import { PropsWithChildren } from "react";
import styles from "./styles/Styles.module.css"

function ErrorMessage(props: PropsWithChildren) {
    return(<p className={styles.error}>{props.children}</p>)
}

export default ErrorMessage;