import styles from "./ButtonComponent.module.css"

type ButtonComponentPropTypes = {
    children?: React.ReactNode;
    version: "cta" | "basic"
    state: "ready" | "disabled" | "loading"
    colorScheme: string
    clickHandler: () => void
};

export const ButtonComponent = ({children, version, state, colorScheme, clickHandler}: ButtonComponentPropTypes) => {
    return (
        <button disabled={state === "disabled"}
                className={`${styles.common} ${version === "cta" && styles.cta} ${version === "basic" && styles.basic} ${"boldN"} ${colorScheme} ${state === "disabled" && styles.disabled}`}
                onClick={clickHandler}>
            {children}
        </button>
    );
};

// TO DO
//
// 1. Add a loading state