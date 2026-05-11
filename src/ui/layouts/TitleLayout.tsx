import styles from "./TitleLayout.module.css"
import React from "react";

export type TitleLayoutPropTypes = {
    colorScheme: string,
    subTitle?: React.ReactNode,
    title: React.ReactNode,
    desciption?: React.ReactNode,
};

export const TitleLayout = ({colorScheme, subTitle, title, desciption}: TitleLayoutPropTypes) => {
    return (
        <div className={`${styles.container} ${colorScheme}`}>
            {subTitle}
            <div className={styles.subContainer}>
                {title}
                {desciption}
            </div>
        </div>
    );
};