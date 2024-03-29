import React, { useState } from 'react';
import { HiVideoCamera } from "react-icons/hi2";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { Transition } from '@headlessui/react';
import LoginHeader from './LoginHeader'; // Ensure this is the correct path
import { RiArrowDropDownLine } from 'react-icons/ri';
import { MdError } from "react-icons/md";

const TypeForm = () => {
    const [showOptions, setShowOptions] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const initialValues = {
        email: '',
        password: '',
        agreeToTerms: false,
        getTips: false,
        tailorExperience: false,
        enrichData: false,
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email address').required('This field cannot be left blank'),
        password: Yup.string()
            .required('This field cannot be left blank')
            .min(8, 'Use 8 or more characters')
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\^$*.\[\]{}\(\)?\-\"!@#%&/,><\':;|_~`])\S*$/,
                'Use a mix of letters, numbers, and symbols'),
    });

    // Render error message with MdError icon
    const renderErrorMessage = (message) => (
        <div className="flex items-center text-error text-sm mt-1 mb-[10px]">
            <MdError className="mr-2 " size="20px" />
            {message}
        </div>
    );

    return (
        <div className='grid grid-cols-1 grid-rows-[52px_auto_52px] relative w-full '>
            <LoginHeader />

            <div className='flex justify-self-center md:max-w-[520px] justify-center mx-auto max-w-[256px] flex-col items-center mb-2 '>
                <div className='flex items-center mb-3 pt-3 '>
                    <span className='mr-2 text-[30px] rotate-180'><HiVideoCamera /></span>
                    <p className='text-[#000000] font-apercu text-[25px] leading-[44px] font-bold'>Typeform</p>
                </div>
                <h2 className='text-[#635E5E] font-apercu text-[23px] leading-[34px] text-center font-extralight'>Get better data with conversational forms, surveys, quizzes & more.</h2>
                {/* FORM */}
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
                                <Field name="email" type="email" className="input input-bordered w-full mb-3" placeholder="Email" />
                                {touched.email && errors.email && renderErrorMessage(errors.email)}

                                <div className="relative mb-3">
                                    <Field
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        className="input input-bordered w-full"
                                        placeholder="Password"
                                    />
                                    <div
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <FaRegEyeSlash className="cursor-pointer text-gray-700" /> : <FaRegEye className="cursor-pointer text-gray-700" />}
                                    </div>
                                    {touched.password && errors.password && renderErrorMessage(errors.password)}
                                </div>

                                <label className="cursor-pointer flex mt-2 mb-3">
                                    <Field type="checkbox" name="agreeToTerms" className="checkbox mr-2" />
                                    I agree to the Terms of Service, Privacy Policy, and Data Processing Agreement.
                                    {touched.agreeToTerms && errors.agreeToTerms && renderErrorMessage(errors.agreeToTerms)}
                                </label>

                                <div className="py-2">
                                    <a className="text-black text-[15px] flex justify-between cursor-pointer" onClick={() => setShowOptions(!showOptions)}>
                                        See options
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
                                                <span className="label-text">Get useful tips, inspiration, and offers via e-communication.</span>
                                                <div className="flex items-center">
                                                    <label className="label cursor-pointer mr-2">
                                                        <Field type="radio" name="getTips" value="yes" className="radio mr-1" />
                                                        <span className="label-text">Yes</span>
                                                    </label>
                                                    <label className="label cursor-pointer">
                                                        <Field type="radio" name="getTips" value="no" className="radio mr-1" />
                                                        <span className="label-text">No</span>
                                                    </label>
                                                </div>
                                            </div>

                                            <div>
                                                <span className="label-text">Tailor Typeform to my needs based on my activity.</span>
                                                <div className="flex items-center">
                                                    <label className="label cursor-pointer mr-2">
                                                        <Field type="radio" name="tailorExperience" value="yes" className="radio mr-1" />
                                                        <span className="label-text">Yes</span>
                                                    </label>
                                                    <label className="label cursor-pointer">
                                                        <Field type="radio" name="tailorExperience" value="no" className="radio mr-1" />
                                                        <span className="label-text">No</span>
                                                    </label>
                                                </div>
                                            </div>

                                            <div>
                                                <span className="label-text">Enrich my data with select third parties for more relevant content.</span>
                                                <div className="flex items-center">
                                                    <label className="label cursor-pointer mr-2">
                                                        <Field type="radio" name="enrichData" value="yes" className="radio mr-1" />
                                                        <span className="label-text">Yes</span>
                                                    </label>
                                                    <label className="label cursor-pointer">
                                                        <Field type="radio" name="enrichData" value="no" className="radio mr-1" />
                                                        <span className="label-text">No</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                    </Transition>

                                </div>

                                <button type="submit" className="btn bg-[#191919] text-white mt-4">
                                    Create my free account
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default TypeForm;
