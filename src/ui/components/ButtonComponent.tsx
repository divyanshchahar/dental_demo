import styles from "./ButtonComponent.module.css"

type ButtonComponentPropTypes = {
    children?: React.ReactNode;
    version: "cta" | "basic";
    state: "ready" | "disabled" | "loading";
    clickHandler: () => void;
    colorScheme: string;
};

export const ButtonComponent = ({children, version, state, clickHandler, colorScheme}: ButtonComponentPropTypes) => {
    return (
        <button disabled={state === "disabled"}
                className={`${styles.common} ${version === "cta" && styles.cta} ${version === "basic" && styles.basic} ${"boldN"}  ${state === "disabled" && styles.disabled} ${colorScheme}`}
                onClick={clickHandler}>
            {children}
        </button>
    );
};

// TO DO
//
// 1. Add a loading state