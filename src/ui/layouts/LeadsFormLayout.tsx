"use client"

import styles from "./LeadsFormLayout.module.css"
import {ButtonComponent} from "@/ui/components/ButtonComponent";
import {SubmitHandler, useForm} from "react-hook-form"
import {AlertDialog} from "radix-ui";
import {useState} from "react";


export interface LeadsFormLayoutPropTypes {
    colorScheme: string;
}

interface FormInputsType {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    query: string;
}

export default function LeadsFormLayout({colorScheme}: LeadsFormLayoutPropTypes) {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<FormInputsType>()

    const onSubmit: SubmitHandler<FormInputsType> = (data) => {
        // console.log(data);
        toggleAlert()
    }

    const [isAlertOpen, setIsAlertOpen] = useState(false);

    const toggleAlert = () => {
        setIsAlertOpen(!isAlertOpen);
    }

    return (
        <>

            <form className={`${styles.container} ${colorScheme}`} onSubmit={handleSubmit(onSubmit)}>

                {/*first name*/}
                <label className={`boldS`}>First Name *</label>

                <input type={"text"} {...register(
                    "firstName", {required: "Pleasae enter First Name"}
                )} className={`${errors.firstName && styles.errorFocused}`}/>

                <p className={`${styles.error}`}>{errors.firstName?.message}</p>


                {/*last name*/}
                <label className={`boldS`}>Last Name *</label>

                <input type={"text"} {...register(
                    "lastName", {required: "Pleasae enter Last Name"}
                )} className={`${errors.lastName && styles.errorFocused}`}/>

                <p className={`${styles.error}`}>{errors.lastName?.message}</p>


                {/*email*/}
                <label className={`boldS`}>Email</label>

                <input type="email" {...register(
                    "email")}/>


                {/*phone number*/}
                <label className={`boldS`}>Whatsapp Phone Number *</label>

                <input type="tel" {...register("phone", {required: "Please enter a whatsapp phone number"})}
                       className={`${errors.phone && styles.errorFocused}`}/>

                <p className={`${styles.error}`}>{errors.phone?.message}</p>

                {/*mesasge*/}
                <label className={`boldS`}>Query *</label>

                <textarea {...register("query", {required: "Please fill your query"})}
                          className={`${errors.query && styles.errorFocused}`}/>

                <p className={`${styles.error}`}>{errors.query?.message}</p>


                {/*submit button*/}
                <ButtonComponent version={"basic"} state={"ready"} colorScheme={colorScheme}
                                 clickHandler={() => handleSubmit(onSubmit)}>Submit</ButtonComponent>

            </form>

            <AlertDialog.Root open={isAlertOpen} onOpenChange={toggleAlert}>

                <AlertDialog.Portal>
                    <AlertDialog.Overlay className={styles.AlertDialogOverlay}/>

                    <AlertDialog.Content className={`${styles.AlertDialogContent} colorScheme2`}>

                        <AlertDialog.Title className={`${styles.AlertDialogTitle} boldL`}>
                            Contact developer to enable this feature
                        </AlertDialog.Title>

                        <AlertDialog.Description className={`${styles.AlertDialogDescription} normalN`}>
                            This feature is not available in demo website. Please contact <span className={"boldN"}>Divyansh Chahar</span> on <span
                            className={"boldN"}>+91-9599698815</span> or write us an email at <span
                            className={"boldN"}>mail@leondevs.tech</span>
                        </AlertDialog.Description>

                        <div style={{display: "flex", justifyContent: "flex-end"}}>
                            <AlertDialog.Cancel asChild>
                                <button>Cancel</button>
                            </AlertDialog.Cancel>
                        </div>
                    </AlertDialog.Content>
                </AlertDialog.Portal>

            </AlertDialog.Root>
        </>
    )
};
