"use client";

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import toast from 'react-hot-toast';
import GLOBALS from '@/config/constants';

const ContactPage = () => {

    const currentYear = new Date().getFullYear();

    const [loading, setLoading] = useState<boolean>(false);
    
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        
        const name = e.target.first_name.value + ' ' + e.target.last_name.value;
        const email = e.target.email.value;
        const phone = e.target.country.value + ' ' + e.target.phone_number.value;
        const subject = e.target.subject.value;
        const message = e.target.message.value;

        const emailHTML = `
        <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <title>Contact Us Submission</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #fffaf5;
                        color: #333;
                        margin: 0;
                        padding: 20px;
                    }

                    .container {
                        max-width: 600px;
                        margin: auto;
                        border: 1px solid #f5a623;
                        border-radius: 10px;
                        background-color: #fff;
                        box-shadow: 0 4px 8px rgba(245, 166, 35, 0.1);
                    }

                    .header {
                        background-color: #f5a623;
                        color: white;
                        padding: 5px;
                        text-align: center;
                        border-top-left-radius: 10px;
                        border-top-right-radius: 10px;
                    }

                    .content {
                        padding: 20px;
                    }

                    .field-label {
                        font-weight: bold;
                        color: #f5a623;
                        margin-top: 15px;
                    }

                    .field-value {
                        margin-bottom: 10px;
                    }

                    .footer {
                        text-align: center;
                        font-size: 12px;
                        color: #aaa;
                        padding: 15px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h2>New Contact Us Submission</h2>
                    </div>
                    <div class="content">
                        <div class="field">
                            <div class="field-label">Name:</div>
                            <div class="field-value">${name}</div>
                        </div>
                        <div class="field">
                            <div class="field-label">Email:</div>
                            <div class="field-value">${email}</div>
                        </div>
                        <div class="field">
                            <div class="field-label">Phone:</div>
                            <div class="field-value">${phone}</div>
                        </div>
                        <div class="field">
                            <div class="field-label">Subject:</div>
                            <div class="field-value">${subject}</div>
                        </div>
                        <div class="field">
                            <div class="field-label">Message:</div>
                            <div class="field-value">${message}</div>
                        </div>
                    </div>
                    <div class="footer">
                        Copyright © ${currentYear} ${GLOBALS.APP_NAME}. All rights reserved.</div>
                    </div>
                </div>
            </body>
        </html>`;
            

        const endpoint = "/api/contact";
        const JSONdata = JSON.stringify({ name, email, phone, subject, message: emailHTML });

        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSONdata,
        };

        try {
            const response = await fetch(endpoint, options);
            const data = await response.json(); 

            if (response.status === 200) {
                toast.success(data.message || "Email sent successfully!");
                e.target.reset(); // Clear the form
            } else {
                toast.error(data.error || "Failed to send email. Try again.");
            }
        } catch (error) {
            console.error(error);
            toast.error("Error sending email. Check your network.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8">

                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">Contact</h2>
                    <div className="text-center"><p className="text-lg">We are here to help and answer any questions you might have. We look forward to hearing from you!</p></div>
                </div>

                <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="first_name" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
                                First name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="first_name"
                                    name="first_name"
                                    type="text"
                                    required
                                    autoComplete="given-name"
                                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last_name" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
                                Last name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="last_name"
                                    name="last_name"
                                    type="text"
                                    required
                                    autoComplete="family-name"
                                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="subject" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
                                Subject
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    required
                                    autoComplete="organization"
                                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
                                Email
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="phone_number" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
                                Phone number
                            </label>
                            <div className="mt-2.5">
                                <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-orange-600">
                                    <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country"
                                            aria-label="Country"
                                            className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-black placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6"
                                        >
                                            <option>+91</option>
                                        </select>
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                        />
                                    </div>
                                    <input
                                        id="phone_number"
                                        name="phone_number"
                                        type="text"
                                        maxLength={10}
                                        required
                                        placeholder="12345 67890"
                                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-600 focus:outline-none sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
                                Message
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600"
                                    defaultValue={''}
                                />
                            </div>
                        </div>

                    </div>
                    <div className="mt-10">
                        <button type="submit" disabled={loading} className="block w-full cursor-pointer rounded-md bg-orange-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                            {loading ? "Sending..." : "Let's talk"}
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactPage