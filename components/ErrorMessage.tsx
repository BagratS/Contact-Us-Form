import { PropsWithChildren } from "react";
import styles from "./styles/Errorstyles.module.css"

function ErrorMessage(props: PropsWithChildren) {
    return(<p className={styles.error}>{props.children}</p>)
}

export default ErrorMessage;