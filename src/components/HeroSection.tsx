'use client';

import React, { useEffect, useState } from "react";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

const HeroSection = () => {

    const [latestBlogs, setLatestBlogs] = useState<Blog[]>([]);
    const [otherBlogs, setOtherBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            const res = await fetch('/data/blogs.json');
            const data: Blog[] = await res.json();

            // Sort by date descending and take the latest 2
            const sorted = data.toSorted((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
            setLatestBlogs(sorted.slice(0, 2));
            setOtherBlogs(sorted.slice(2, 14));
        };

        fetchBlogs();
    }, []);

    return (
        <>
            <div className='container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8'>
                <div className='grid gap-10 md:grid-cols-2 lg:gap-10'>
                    
                    {latestBlogs.map((blog) => (
                        <div key={blog.id} className="group cursor-pointer">
                            <div className='overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800'>
                                <Link href={`/archive/${blog.id}`} className='relative block aspect-video'>
                                    <Image
                                        loading="lazy"
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        className='object-cover object-center w-full h-full transition-all duration-300 group-hover:scale-105'
                                    />
                                </Link>
                            </div>
                            <div>
                                <div className='flex gap-3'>
                                    <Link href={`/archive?category=${blog.category}`}>
                                        <span className='inline-block text-xs font-medium tracking-wider uppercase mt-5 text-blue-600'>
                                            {blog.category}
                                        </span>
                                    </Link>
                                </div>
                                <h2 className='text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white'>
                                    <Link href={`/archive/${blog.id}`}>
                                        <span className='bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900'>
                                            {blog.title}
                                        </span>
                                    </Link>
                                </h2>
                                <div className='mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400'>
                                    <time className='truncate text-sm'>
                                        {moment(blog.date).format('MMMM D, YYYY')}
                                    </time>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
                    {otherBlogs.map((blog) => (
                        <div key={blog.id} className="group cursor-pointer">
                            <div className=' overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800'>
                                <Link href={`/archive/${blog.id}`} className='relative block aspect-square'>
                                    <Image
                                        loading="lazy"
                                        src={blog.image}
                                        // src='/images/sample.jpg'
                                        alt='hero'
                                        fill={true}
                                        className='object-cover object-center w-full h-full transition-all duration-300 group-hover:scale-105'
                                    />
                                </Link>
                            </div>
                            <div className=''>
                                <div>
                                    <div className='flex gap-3'>
                                        <Link href={`/archive?category=${blog.category}`}>
                                            <span className='inline-block text-xs font-medium tracking-wider uppercase mt-5 text-blue-600'>
                                                {blog.category}
                                            </span>
                                        </Link>
                                    </div>
                                    <h2 className='text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-white'>
                                        <Link href={`/archive/${blog.id}`}>
                                            <span className='bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900'>
                                                {blog.title}
                                            </span>
                                        </Link>
                                    </h2>
                                    <div className='hidden'>
                                        <p className='mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400'>
                                            <Link href={`/archive/${blog.id}`}>
                                                {blog.description}
                                            </Link>
                                        </p>
                                    </div>
                                    <div className='mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400'>
                                        <time className='truncate text-sm'>
                                            {moment(blog.date).format('MMMM D, YYYY')}
                                        </time>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-10 flex justify-center">
                    <Link className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300" href="/archive">
                        <span>View all Posts</span>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
