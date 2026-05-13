import LogoIcon from "../../../public/icons/LogoIcon";
import YoutubeIcon from "../../../public/icons/YoutubeIcon";
import InstagramIcon from "../../../public/icons/InstagramIcon";
import FacebookIcon from "../../../public/icons/FacebookIcon";
import styles from "./FooterLayout.module.css"

export const FooterLayout = () => {
    return (
        <div className={`${styles.container} normalN colorScheme4`}>

            <div className={`${styles.detailsContainer} colorScheme4`}>

                <div className={`${styles.upperContainer}`}>

                    <div className={`${styles.branding} colorScheme4`}>
                        <LogoIcon/>
                        <p className={`heading4`}>Pearl Dental Clinic</p>
                    </div>

                    <div className={`${styles.socialMediaLogos} normalN`}>
                        <YoutubeIcon/>
                        <InstagramIcon/>
                        <FacebookIcon/>
                    </div>

                </div>

                <div className={`${styles.workingHours}`}>
                    <p className={`boldN`}>Opening Hours</p>
                    <p>Mon: 10 am to 6 pm</p>
                    <p>Tue: 10 am to 6 pm</p>
                    <p>Wed: 10 am to 6 pm</p>
                    <p>Thu: 10 am to 6 pm</p>
                    <p>Fri: 10 am to 6 pm</p>
                </div>

            </div>

            <hr className={`${styles.seprator} colorScheme4`}/>

            <p className={`${styles.copyrightText} colorScheme4 lightS`}>Copyright 2026 Pearl Dental Clinic | All Rights
                Reserved</p>

        </div>
    );
};

export default FooterLayout;