"use client"

import {TitleLayout} from "@/ui/layouts/TitleLayout";
import {ReviewCardLayout} from "@/ui/layouts/ReviewCardLayout";
import styles from "./page.module.css"
import {ComparisonLayout} from "@/ui/layouts/ComparisonLayout";
import porceleanVeneers from "./../../public/pictures/comparison1.png"
import teethWhitening from "./../../public/pictures/comparison2.png"
import clearAligners from "./../../public/pictures/comparison3.png"
import AccordionPrimitive from "@/ui/primitives/AccordionPrimitive";
import {ChevronIcon} from "../../public/icons/ChevronIcon";
import {ButtonComponent} from "@/ui/components/ButtonComponent";
import {TreatmentCardLayout} from "@/ui/layouts/TreatmentCardLayout";
import DentalImplantIcon from "../../public/icons/DentalImplantIcon";
import DenturesIcon from "../../public/icons/DenturesIcon";
import RCTIcon from "../../public/icons/RCTIcon";
import ShinningTeethIcon from "../../public/icons/ShinningTeethIcon";
import {HeroSectionLayout} from "@/ui/layouts/HeroSectionLayout";
import FooterLayout from "@/ui/layouts/FooterLayout";
import {TickerCardLayout} from "@/ui/layouts/TickerCardLayout";
import {PhoneIcon} from "../../public/icons/PhoneIcon";
import MailIcon from "../../public/icons/MailIcon";
import LocationIcon from "../../public/icons/LocationIcon";
import QuickIcon from "../../public/icons/QuickIcon";
import ReplyRateIcon from "../../public/icons/ReplyRateIcon";
import ConfidentialIcon from "../../public/icons/ConfidentialIcon";
import LeadsFormLayout from "@/ui/layouts/LeadsFormLayout";
import SmileMakeoverIcon from "../../public/icons/SmileMakeoverIcon";


const TestimonialSection = () => {
    return (
        <div className={`${styles.paddedContainer} colorScheme1`}>
            <div className={`${styles.flexContainer1} ${styles.xxlContainer}`}>

                <TitleLayout colorScheme={"colorScheme2"} title={<h2 className={"heading4"}>Patient Voices</h2>}
                             subTitle={<p className={"boldS"}>Testimonials</p>}/>

                <div className={styles.flexContainer2}>
                    <ReviewCardLayout colorScheme={"colorScheme1"}
                                      reviewText={"Doctor Dant Kumar was very polite and professional, his clinic was very clean and hygenic. My teeth were whitened in just 2 hours. I was really able to see results in the first siting."}
                                      reviewersImage={"https://cdn.midjourney.com/6355069d-9f28-4113-a1e5-7bc4a3a39ee4/0_3.png"}
                                      reviewersName={"Pankaj Goel"}/>

                    <ReviewCardLayout colorScheme={"colorScheme1"}
                                      reviewText={"I recently got porcelain veneers done at this dental clinic, and I honestly couldn’t be happier with the results! The veneers look incredibly natural — bright, perfectly shaped, and completely transformed my confidence. I’ve already received so many compliments from friends and family who can’t stop noticing my new smile!"}
                                      reviewersImage={"https://cdn.midjourney.com/e663cc5b-84ec-48a6-9cd0-de4440c49c61/0_0.png"}
                                      reviewersName={"Shreya Gupta"}/>

                    <ReviewCardLayout colorScheme={"colorScheme1"}
                                      reviewText={"I recently completed my clear braces treatment with this dentist to correct the gap between my teeth, and I’m absolutely thrilled with the results! I had always been self-conscious about my smile, but now I can finally smile confidently in photos and conversations."}
                                      reviewersImage={"https://cdn.midjourney.com/e4057c98-f154-4208-98ff-111412e243b5/0_3.png"}
                                      reviewersName={"Preeti Sharma"}/>
                </div>
            </div>
        </div>
    )
}

const ResultsSection = () => {
    return (
        <div className={`colorScheme2 ${styles.paddedContainer}`}>
            <div className={`${styles.flexContainer1} ${styles.xxlContainer}`}>

                <TitleLayout colorScheme={"colorScheme2"} title={<h2 className={"heading4"}>Smiles We Created</h2>}
                             subTitle={<p className={"boldS"}>Results</p>}/>

                <div className={styles.flexContainer2}>
                    <ComparisonLayout colorScheme={"colorScheme2"} comaprisonPicture={porceleanVeneers}
                                      treatmentName={"Porcelean Veneers"}/>

                    <ComparisonLayout colorScheme={"colorScheme2"} comaprisonPicture={teethWhitening}
                                      treatmentName={"Teeth Whitening"}/>

                    <ComparisonLayout colorScheme={"colorScheme2"} comaprisonPicture={clearAligners}
                                      treatmentName={"Clear Aligners"}/>
                </div>
            </div>
        </div>
    )
}

const FAQSection = () => {
    return (
        <div className={`colorScheme1 ${styles.paddedContainer}`}>
            <div className={`${styles.flexContainer1} ${styles.xxlContainer}`}>

                <TitleLayout colorScheme={"colorScheme2"}
                             title={<h2 className={"heading4"}>Frequently Asked Questions</h2>}
                             subTitle={<p className={"boldS"}>Doubts ?</p>}
                             desciption={<p className={"lightL"}>Find answers to what matters most about your dental
                                 care</p>}/>

                <AccordionPrimitive colorScheme={"colorScheme1"}
                                    accordionItems={[{
                                        headerText: "Does dental work hurt ?",
                                        descriptionText: "No,we have a variety of ways to help calm your nerves and provide pain medication so that you can relax and feel comfortable, regardless of whether your teeth are being cleaned or you are having major dental work done."
                                    }, {
                                        headerText: "How quickly will I recover ?",
                                        descriptionText: "Most dental procedures have a short recovery time. For example, if your cavity is treated you should feel better later that day. If you are having something major like oral surgery, the recovery time can be several days, we will go over specifics during your consultation. "
                                    }, {
                                        headerText: "Why do I need to have my crown replaced?",
                                        descriptionText: "A restoration can wear out just like anything can. It is easy for a restoration to become chipped, for example if you grind your teeth at night. Simultaneously, if you are repeatedly getting infections, this will put your restoration at risk."
                                    }]}
                                    triggerIcon={<ChevronIcon/>}/>
            </div>
        </div>
    )
}

const CTASection = () => {
    return (
        <div className={`colorScheme3 ${styles.paddedContainer} ${styles.ctaContainer}`}>
            <div className={`${styles.flexContainer3} ${styles.mContainer}`}>

                <h1 className={`heading1`}>Make Your Teeth Visibly Whiter Today</h1>

                <p className={`boldL`}>Don’t be anxious of your teeth anymore. Regain your confidence and live a fuller
                    life.
                </p>

                <ButtonComponent version={"cta"} state={"ready"} clickHandler={() => {
                }}> Book Free Call </ButtonComponent>
            </div>
        </div>
    )
}

const TreatmentsSection = () => {
    return (
        <div className={`colorScheme1 ${styles.paddedContainer}`}>
            <div className={`${styles.flexContainer1} ${styles.xxlContainer}`}>

                <TitleLayout colorScheme={"colorScheme1"} title={<h2 className={"heading4"}>Treatments We Offer</h2>}
                             desciption={<p className={"lightL"}>We provide complete dental care</p>}/>

                <div className={styles.flexContainer2}>
                    <TreatmentCardLayout treatmentIcon={<DentalImplantIcon/>}
                                         treatmentName={"Dental Implants and Caps"}
                                         treatmentDescription={"Durable restoration that looks and feels natural."}
                                         colorScheme={"colorScheme1"}/>

                    <TreatmentCardLayout treatmentIcon={<DenturesIcon/>}
                                         treatmentName={"Complete Dentures"}
                                         treatmentDescription={"Custom fit dentures restore what time takes away."}
                                         colorScheme={"colorScheme1"}/>

                    <TreatmentCardLayout treatmentIcon={<RCTIcon/>} treatmentName={"Root Canal"}
                                         treatmentDescription={"We save teeth that deserve saving. Precision magnification and modern technique mean success rates that matter."}
                                         colorScheme={"colorScheme1"}/>
                    <TreatmentCardLayout treatmentIcon={<ShinningTeethIcon/>}
                                         treatmentName={"Teeth Whitening"}
                                         treatmentDescription={"Professional results that brighten your smile."}
                                         colorScheme={"colorScheme1"}/>

                    <TreatmentCardLayout treatmentIcon={<SmileMakeoverIcon/>}
                                         treatmentName={"Smile Makeover"}
                                         treatmentDescription={"Comprehensive planning transforms your smile completely."}
                                         colorScheme={"colorScheme1"}/>
                </div>
            </div>
        </div>
    )
}

const ReachoutSection = () => {

    const colorScheme = "colorScheme2";

    return (
        <div className={`${colorScheme} ${styles.paddedContainer}`}>

            <div className={`${styles.xxlContainer}`}>

                <h2 className={"heading4"}>Reach out to us</h2>

                <div className={`${styles.flexContainer4}`}>


                    <div className={`${styles.flexContainer5} ${colorScheme}`}>
                        <div className={`${styles.flexContainer6} ${colorScheme}`}>
                            <TickerCardLayout tickerCardIcon={<PhoneIcon/>} tickerCardtext={"91-XXXXXXXXXX"}/>
                            <TickerCardLayout tickerCardIcon={<MailIcon/>} tickerCardtext={"mail@domain.com"}/>
                            <TickerCardLayout tickerCardIcon={<LocationIcon/>}
                                              tickerCardtext={"Shop No 5, Smile Street, Muskanpur"}/>
                        </div>

                        <hr/>

                        <div className={`${styles.flexContainer6}`}>
                            <TickerCardLayout tickerCardIcon={<QuickIcon/>}
                                              tickerCardtext={"We will reply within 24 hours"}/>
                            <TickerCardLayout tickerCardIcon={<ReplyRateIcon/>} tickerCardtext={"100% reply rate"}/>
                            <TickerCardLayout tickerCardIcon={<ConfidentialIcon/>}
                                              tickerCardtext={"all your questions will be kept confidential"}/>
                        </div>
                    </div>

                    <hr className={`${styles.mobileOnly}`}/>

                    <div className={`${styles.flexContainer5} ${styles.verticalRule} colorScheme2`}>
                        <LeadsFormLayout colorScheme={colorScheme}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <>
            <HeroSectionLayout/>
            <TestimonialSection/>
            <ResultsSection/>
            <FAQSection/>
            <CTASection/>
            <TreatmentsSection/>
            <ReachoutSection/>
            <FooterLayout/>
        </>
    );
}
