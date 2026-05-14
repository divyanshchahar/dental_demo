import {ButtonComponent} from "@/ui/components/ButtonComponent";
import styles from "./TreatmentCardLayout.module.css"

export type TreatmentCardLayoutPropTypes = {
    treatmentIcon: React.ReactNode
    treatmentName: string
    treatmentDescription: string
    colorScheme: string
    clickHandler: () => void;
};

export const TreatmentCardLayout = ({
                                        treatmentIcon,
                                        treatmentName,
                                        treatmentDescription,
                                        colorScheme,
                                        clickHandler,
                                    }: TreatmentCardLayoutPropTypes) => {
    return (
        <div className={`${styles.container} ${colorScheme}`}>
            {treatmentIcon}

            <p className={`${styles.treatmentText} boldN`}>{treatmentName}</p>

            <p>{treatmentDescription}</p>

            <ButtonComponent version={"cta"} state={"ready"} colorScheme={colorScheme} clickHandler={clickHandler}>Book Free Call</ButtonComponent>
        </div>
    );
};