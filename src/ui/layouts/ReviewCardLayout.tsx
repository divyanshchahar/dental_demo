import StarIcon from "../../../public/icons/StarIcon";
import styles from "./ReviewCardLayout.module.css"
import GoogleIcon from "../../../public/icons/GoogleIcon";
import AvatarPrimitive from "@/ui/primitives/AvatarPrimitive";

export type ReviewCardLayoutPropTypes = {
    colorScheme: string;
    reviewHeading?: string;
    reviewText: string;
    reviewersImage: string;
    reviewersName: string;
};

export const ReviewCardLayout = ({
                                     colorScheme,
                                     reviewHeading,
                                     reviewText,
                                     reviewersImage,
                                     reviewersName
                                 }: ReviewCardLayoutPropTypes) => {
    return (
        <div className={`${styles.container} ${colorScheme}`}>
            {reviewHeading && <p className={`${styles.reviewHeading} boldN`}>{reviewHeading}</p>}

            {reviewText && <p>{reviewText}</p>}

            <div className={styles.ratingContainer}>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
            </div>

            <div className={styles.bottomContainer}>

                <div className={`${styles.reviewerDetailsContainer} boldN`}>
                    <AvatarPrimitive avatarUrl={reviewersImage} colorScheme={colorScheme}/>
                    {reviewersName}
                </div>

                <GoogleIcon/>
            </div>
        </div>
    );
};