'use client';

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Blog } from '@/types/blog';
import moment from 'moment';

const ArchivePage = () => {

    const searchParams = useSearchParams();
    const category = searchParams.get('category');
    const [latestBlogs, setLatestBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            const res = await fetch('/data/blogs.json');
            const data: Blog[] = await res.json();

            // Sort by date descending
            const sorted = data.toSorted((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

            if (category) {
                const filtered = data.filter((blog) => blog.category.toString() === category);
                setLatestBlogs(filtered);
            } else {
                setLatestBlogs(sorted);
            }
        };

        fetchBlogs();
    }, [category]);

    return (
        <>
            <div className='container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8'>

                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">{category ?? 'Archive'}</h2>
                    <div className="text-center"><p className="text-lg">{category ? latestBlogs.length + ' Article' : 'See all posts we have ever written.'}</p></div>
                </div>

                <div className='mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3'>
                    {latestBlogs.map((blog) => (

                        <div key={blog.id} className="group cursor-pointer">
                            <div className=' overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800'>
                                <Link href={`/archive/${blog.id}`} className='relative block aspect-square'>
                                    <Image
                                        loading="lazy"
                                        src={blog.image}
                                        alt='hero'
                                        fill={true}
                                        className='object-cover transition-all'
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
                                        <Link href='/archive/1'>
                                            <span className='bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900'>
                                                {blog.title}
                                            </span>
                                        </Link>
                                    </h2>
                                    <div className='hidden'>
                                        <p className='mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400'>
                                            <Link href='/archive/1'>
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

            </div>
        </>
    )
}

export default ArchivePage