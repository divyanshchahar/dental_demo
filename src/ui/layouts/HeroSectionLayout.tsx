import styles from "./HeroSectionLayout.module.css"
import StarIcon from "../../../public/icons/StarIcon";
import GoogleIcon from "../../../public/icons/GoogleIcon";
import {ButtonComponent} from "@/ui/components/ButtonComponent";


export const HeroSectionLayout = () => {
    return (
        <div className={styles.container}>
            <div className={`${styles.imageContainer} colorScheme1`}>
                <div className={`${styles.reviewContainer}  "colorScheme1"`}>
                    <p className={"boldN"}>100 + </p>
                    <p className={`${styles.goldenText} boldN`}>5.0 </p>
                    <StarIcon/>
                    <p>reviews on </p>
                    <GoogleIcon/>
                </div>

                <div className={`${styles.textContainer}`}>
                    <p className={"heading1"}>
                        <span className={`heading1 ${styles.brandedText}`}>Visibly Whiter Teeth</span> in <span
                        className={`heading1 ${styles.brandedText}`}>One Sitting</span>
                    </p>

                    <ButtonComponent version={"cta"} state={"ready"} colorScheme={"colorScheme1"}>Book a Free
                        Call</ButtonComponent>
                </div>
            </div>
        </div>
    );
};