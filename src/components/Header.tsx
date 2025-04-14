'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import GLOBALS from '@/config/constants'
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathname = usePathname();
    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Archive', href: '/archive' },
    ]

    const linkClasses = (path: string) => {
        // const isActive = pathname === path;
        const isActive = pathname === path || new RegExp(`^${path}/\\d+`).test(pathname); // Matches paths like /archive/1, /archive/2, etc.

        return `text-lg font-medium ${isActive ? 'text-orange-500' : 'text-gray-900 hover:text-orange-500 dark:text-white'}`;
    };


    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <header className="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="flex items-center justify-between lg:justify-center px-8 mx-auto xl:px-5 max-w-screen-lg p-6 lg:px-8">

                    <div className="flex lg:flex-1 lg:hidden">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">{GLOBALS.AUTHOR_NAME}</span>
                            <Image
                                alt=""
                                fill={true}
                                src="/images/logo.jpeg"
                                className="!h-8 !w-12 !relative rounded-full object-cover"
                            />
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="hidden lg:w-full lg:flex lg:items-center lg:justify-center lg:gap-x-12">
                        <Link href="/" className={linkClasses('/')}>
                            Home
                        </Link>
                        <Link href="/about" className={linkClasses('/about')}>
                            About
                        </Link>
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">{GLOBALS.AUTHOR_NAME}</span>
                            <Image
                                alt=""
                                fill={true}
                                src="/images/logo.jpeg"
                                className="!h-10 !w-15 !relative rounded-full object-cover"
                            />
                        </Link>
                        <Link href="/archive" className={linkClasses('/archive')}>
                            Archive
                        </Link>
                        <Link href="/contact" className={linkClasses('/contact')}>
                            Contact
                        </Link>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">

                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 pr-8 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <Image
                                    alt=""
                                    fill={true}
                                    src="/images/logo.jpeg"
                                    className="!h-8 !w-12 !relative rounded-full object-cover"
                                />
                            </Link>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-white"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 dark:text-white hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>
        </>
    )
}

export default Header
