"use client"

import styles from "./LeadsFormLayout.module.css"
import {ButtonComponent} from "@/ui/components/ButtonComponent";
import {SubmitHandler, useForm} from "react-hook-form"


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
    }

    return (
        <form className={`${styles.container} ${colorScheme}`} onSubmit={handleSubmit(onSubmit)}>

            {/*first name*/}
            <label className={`boldS`}>First Name *</label>

            <input type={"text"} {...register(
                "firstName", {required: "pleasae enter first name"}
            )} className={`${errors.firstName && styles.errorFocused}`}/>

            <p className={`${styles.error}`}>{errors.firstName?.message}</p>


            {/*last name*/}
            <label className={`boldS`}>Last Name *</label>

            <input type={"text"} {...register(
                "lastName", {required: "pleasae enter last name"}
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
            <label className={`boldS`}>Query</label>

            <textarea {...register("query", {required: "Please fill your query"})}
                   className={`${errors.phone && styles.errorFocused}`}/>

            <p className={`${styles.error}`}>{errors.query?.message}</p>


            {/*submit button*/}
            <ButtonComponent version={"basic"} state={"ready"} colorScheme={colorScheme}
                             clickHandler={() => handleSubmit(onSubmit)}>Submit</ButtonComponent>

        </form>
    )
};