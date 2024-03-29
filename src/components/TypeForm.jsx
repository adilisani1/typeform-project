import React, { useState } from 'react';
import { HiVideoCamera } from "react-icons/hi2";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { Transition } from '@headlessui/react';
import LoginHeader from './LoginHeader';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { MdError } from "react-icons/md";
import { useLanguage } from './LanguageContext';

const TypeForm = () => {
    const [showOptions, setShowOptions] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { language, setLanguage } = useLanguage();


    const initialValues = {
        email: '',
        password: '',
        agreeToTerms: false,
        getTips: 'no',
        tailorExperience: 'no',
        enrichData: 'no',
    };



    const renderErrorMessage = (message) => (
        <div className="flex items-center text-error text-sm mt-1 mb-[10px]">
            <MdError className="mr-2 " size="20px" />
            {message}
        </div>
    );

    const texts = {
        title: language === 'English' ? "Typeform" : "Typeform",
        subTitle: language === 'English'
            ? "Get better data with conversational forms, surveys, quizzes & more."
            : "Obtén mejores datos con formularios conversacionales, encuestas, cuestionarios y más.",
        emailPlaceholder: language === 'English' ? "Email" : "Correo electrónico",
        passwordPlaceholder: language === 'English' ? "Password" : "Contraseña",
        termsAgreement: language === 'English'
            ? "I agree to the Terms of Service, Privacy Policy, and Data Processing Agreement."
            : "Acepto los Términos de Servicio, Política de Privacidad y el Acuerdo de Procesamiento de Datos.",
        seeOptions: language === 'English' ? "See options" : "Ver opciones",
        createAccount: language === 'English' ? "Create my free account" : "Crear mi cuenta gratis",
        options: {
            getTips: language === 'English'
                ? "Get useful tips, inspiration, and offers via e-communication."
                : "Recibe consejos útiles, inspiración y ofertas por comunicación electrónica.",
            yes: language === 'English' ? "Yes" : "Sí",
            no: language === 'English' ? "No" : "No",
            tailorExperience: language === 'English'
                ? "Tailor Typeform to my needs based on my activity."
                : "Adaptar Typeform a mis necesidades basado en mi actividad.",
            enrichData: language === 'English'
                ? "Enrich my data with select third parties for more relevant content."
                : "Enriquecer mis datos con terceros seleccionados para contenido más relevante.",
        },
        validationMessages: {
            invalidEmail: language === 'English' ? 'Invalid email address' : 'Dirección de correo electrónico inválida',
            fieldRequired: language === 'English' ? 'This field cannot be left blank' : 'Este campo no puede estar vacío',
            minLength: language === 'English' ? 'Use 8 or more characters' : 'Utiliza 8 caracteres o más',
            acceptTerms: language === 'English' ? 'Please accept the terms and conditions to finish the signup' : 'Por favor, acepta los términos y condiciones para completar el registro',
        }

    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email(texts.validationMessages.invalidEmail).required(texts.validationMessages.fieldRequired),
        password: Yup.string()
            .required(texts.validationMessages.fieldRequired)
            .min(8, texts.validationMessages.minLength),
        agreeToTerms: Yup.boolean()
            .oneOf([true], texts.validationMessages.acceptTerms)
            .required(texts.validationMessages.acceptTerms),
    });


    return (
        <div className='grid grid-cols-1 grid-rows-[52px_auto_52px] relative w-full '>
            <LoginHeader />
            <div className='flex justify-self-center md:max-w-[520px] justify-center mx-auto max-w-[256px] flex-col items-center mb-2 '>
                <div className='flex items-center mb-3 pt-3 '>
                    <span className='mr-2 text-[30px] rotate-180'><HiVideoCamera /></span>
                    <p className='text-[#000000] font-apercu text-[25px] leading-[44px] font-bold'>{texts.title}</p>
                </div>
                <h2 className='text-[#635E5E] font-apercu text-[23px] leading-[34px] text-center font-extralight'>{texts.subTitle}</h2>
                <div className=' w-full md:max-w-[256px]'>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form className="form-control w-full mt-5">
                                <Field name="email" type="email" className="input input-bordered w-full mb-3" placeholder={texts.emailPlaceholder} />
                                {touched.email && errors.email && renderErrorMessage(errors.email)}

                                <div className="relative mb-3 flex flex-col justify-center">
                                    <Field
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        className="input input-bordered w-full"
                                        placeholder={texts.passwordPlaceholder}
                                    />
                                    <div
                                        className="absolute top-4 my-auto right-0 pr-3 flex text-sm leading-5"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <FaRegEyeSlash className="cursor-pointer text-gray-700" /> : <FaRegEye className="cursor-pointer text-gray-700" />}
                                    </div>
                                    {touched.password && errors.password && renderErrorMessage(errors.password)}
                                </div>

                                <label className="cursor-pointer mt-2 mb-3">
                                    <div className='flex '>
                                        <Field type="checkbox" name="agreeToTerms" className="checkbox mr-2" />
                                        <div className='text-[14px]'> {texts.termsAgreement}</div>

                                    </div>
                                    {touched.agreeToTerms && errors.agreeToTerms && renderErrorMessage(errors.agreeToTerms)}
                                </label>

                                <div className="py-2">
                                    <a className="text-black text-[15px] flex justify-between cursor-pointer" onClick={() => setShowOptions(!showOptions)}>
                                        {texts.seeOptions}
                                        <RiArrowDropDownLine className='text-[34px]' />
                                    </a>

                                    <Transition
                                        show={showOptions}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <div className="mt-2 space-y-2">
                                            <div>
                                                <span className="label-text">{texts.options.getTips}</span>
                                                <div className="flex items-center">
                                                    <label className="label cursor-pointer mr-2">
                                                        <Field type="radio" name="getTips" value="yes" className="radio mr-1" />
                                                        {texts.options.yes}
                                                    </label>
                                                    <label className="label cursor-pointer">
                                                        <Field type="radio" name="getTips" value="no" className="radio mr-1" />
                                                        {texts.options.no}
                                                    </label>
                                                </div>
                                            </div>

                                            <div>
                                                <span className="label-text">{texts.options.tailorExperience}</span>
                                                <div className="flex items-center">
                                                    <label className="label cursor-pointer mr-2">
                                                        <Field type="radio" name="tailorExperience" value="yes" className="radio mr-1" />
                                                        {texts.options.yes}
                                                    </label>
                                                    <label className="label cursor-pointer">
                                                        <Field type="radio" name="tailorExperience" value="no" className="radio mr-1" />
                                                        {texts.options.no}
                                                    </label>
                                                </div>
                                            </div>

                                            <div>
                                                <span className="label-text">{texts.options.enrichData}</span>
                                                <div className="flex items-center">
                                                    <label className="label cursor-pointer mr-2">
                                                        <Field type="radio" name="enrichData" value="yes" className="radio mr-1" />
                                                        {texts.options.yes}
                                                    </label>
                                                    <label className="label cursor-pointer">
                                                        <Field type="radio" name="enrichData" value="no" className="radio mr-1" />
                                                        {texts.options.no}
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </Transition>
                                </div>

                                <button type="submit" className="btn bg-[#191919] text-white mt-4">
                                    {texts.createAccount}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default TypeForm;
