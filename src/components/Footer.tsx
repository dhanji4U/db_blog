import Link from 'next/link'
import React from 'react'
import GLOBALS from '../config/constants';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer>
                <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8 border-t border-gray-100 dark:border-gray-800"><div className="text-center text-sm">
                    Copyright © {currentYear} {GLOBALS.APP_NAME}. All rights reserved.</div>
                    <div className="mt-1 flex justify-center gap-1 text-center text-sm text-gray-500 dark:text-gray-300">
                        <span> Made by <Link href="#" rel="noopener" target="_blank">{GLOBALS.AUTHOR_NAME}</Link></span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
