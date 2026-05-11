import styles from "./ComparisonLayout.module.css"
import Image, {StaticImageData} from "next/image";


export type ComparisonLayoutPropTypes = {
    colorScheme: string;
    comaprisonPicture: StaticImageData;
    treatmentName: string;
};

export const ComparisonLayout = ({colorScheme, comaprisonPicture, treatmentName}: ComparisonLayoutPropTypes) => {
    return (
        <div className={`${styles.container} ${styles.roundedBorder}`}>
            <Image src={comaprisonPicture} alt={`before and after image of ${treatmentName}`}
                   className={`${styles.roundedBorder} ${styles.comparisonImage}`}/>

            <div className={`${styles.treatmentNamecontainer} ${colorScheme} boldN`}>{treatmentName}</div>
        </div>
    );
};