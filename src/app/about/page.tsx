import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutPage = () => {
    return (
        <>
            <div className='container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8'>

                {/* About Tejas Section */}
                <div className="mx-auto max-w-2xl mb-10 text-center">

                   <h2 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
                        About Tejas
                    </h2>
                    <div className="text-center">
                        <p className="text-lg">
                        Tejas is a passionate entrepreneur and technology leader who founded TejasKP AI Software with the vision to empower students and professionals through skill-based learning and real-world IT experience. With deep experience in software development, AI, and training, he is committed to bridging the gap between academia and the IT industry.
                        </p>
                    </div>
                </div>

                <div className="mx-auto max-w-2xl text-center">
                    {/* <h2 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
                        About
                    </h2> */}
                    <h2 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
                        TejasKP AI Software
                    </h2>
                    <div className="text-center">
                        <p className="text-lg">
                            Fastest growing IT company offering expert-led training and internships in trending technologies.
                        </p>
                    </div>
                </div>

                <div className="my-10 flex justify-center ">
                    <div className="relative aspect-square overflow-hidden rounded-md bg-slate-50">
                        <Image
                            src="/images/tejas_ai.jpeg" // Replace with actual logo if available
                            alt="Tejaskp Logo"
                            width={285}
                            height={285}
                            className="object-cover"
                            loading='lazy'
                        />
                    </div>
                </div>

                <div className="mx-auto mt-14 text-center max-w-2xl px-4 text-gray-800 dark:text-gray-200">
                    <p className="mb-4 text-base leading-relaxed">
                        <span className='text-2xl font-bold'>TEJASKP AI SOFTWARE</span> provides high-quality internships and training for students passionate about the IT field. Our focus is on real-world skills, hands-on projects, and expert guidance to prepare you for industry demands.
                    </p>
                    <p className="mb-4 text-base leading-relaxed">
                        We offer training in Web Development (.NET, Java, PHP, React, Angular), Mobile App Development (Flutter, Java, Kotlin, Swift), AI, ML, Data Science, Python, Cloud (AWS, Azure, Google Cloud), Cybersecurity, Blockchain, IoT, UI/UX, DevOps, and Digital Marketing (SEO, SEM, Social Media).
                    </p>
                    <p className="mb-4 text-base leading-relaxed">
                        Whether you&#39;re looking to explore cutting-edge technologies or boost your resume with hands-on experience, our courses are tailored to help you succeed.
                    </p>
                    <p className="mb-4 text-base font-semibold text-orange-600">
                        📞 Contact: <a href="tel:9104630598">9104630598</a> | Location: Vadodara
                    </p>
                    <p>
                        <Link href="/contact" className="font-semibold underline dark:text-blue-400">
                            Get in touch
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default AboutPage
