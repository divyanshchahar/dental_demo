import styles from "./TickerCardLayout.module.css"

export type TickerCardLayoutPropLayout = {
    tickerCardIcon: React.ReactNode;
    tickerCardtext: React.ReactNode;
};

export const TickerCardLayout = ({tickerCardIcon, tickerCardtext}: TickerCardLayoutPropLayout) => {
    return (
        <div className={styles.container}>
            {tickerCardIcon}
            {tickerCardtext}
        </div>
    );
};