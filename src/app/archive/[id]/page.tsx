'use client';
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation';
import { Blog } from '@/types/blog';
import GLOBALS from '@/config/constants';

const ArchieveDetailsPage = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState<Blog | null>(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await fetch('/data/blogs.json');
                const data: Blog[] = await res.json();
                const foundBlog = data.find((b) => b.id.toString() === id);
                setBlog(foundBlog || null);
            } catch (err) {
                console.error('Failed to fetch blog:', err);
                setBlog(null);
            }
        };

        if (id) {
            fetchBlog();
        }
    }, [id]);

    if (blog === null) return <> </>

    return (
        <>
            <div className='container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8'>
                <div className="mx-auto max-w-screen-md">
                    <div className="flex justify-center">
                        <div className="flex gap-3">
                            <Link href={`/archive?category=${blog.category}`}>
                                <span className="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-blue-600">{blog?.category}</span>
                            </Link>
                        </div>
                    </div>
                    <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">{blog?.title}</h1>
                    <div className='mt-3 flex justify-center space-x-3 text-gray-500 '>
                        <div className='flex items-center gap-3'>
                            <div>
                                <div className="flex items-center space-x-2 text-sm">
                                    <time className="text-gray-500 dark:text-gray-400" dateTime="2022-10-21T15:48:00.000Z">October 21, 2022</time>
                                    {/* <span>· 8 min read</span> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
                <Image
                    src={blog.image}
                    alt="Mario Sanchez"
                    fill={true}
                    className="object-cover"
                    loading='lazy'
                />
            </div>
            <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
                <article className="mx-auto max-w-screen-md ">
                    <div className="text-gray-800 dark:text-gray-100 space-y-4 leading-relaxed text-base mx-auto my-3 text-justify">
                        <div dangerouslySetInnerHTML={{ __html: blog?.description }} />
                    </div>
                    <div className="mb-7 mt-7 flex justify-center">
                        <Link className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500 " href="/archive">← View all posts</Link>
                    </div>
                    <div className="mt-3 rounded-2xl bg-gray-50 px-8 py-8 text-gray-500 dark:bg-gray-900 dark:text-gray-400">
                        <div className="flex flex-wrap items-start sm:flex-nowrap sm:space-x-6">
                            <div className="relative mt-1 h-24 w-24 flex-shrink-0 ">
                                <Link href="/about">
                                    <Image
                                        src='/images/tejas.jpeg'
                                        alt="Mario Sanchez"
                                        fill={true}
                                        className="rounded-full object-cover"
                                        loading='lazy'
                                    />
                                </Link>
                            </div>
                            <div>
                                <div className="mb-3">
                                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">About {GLOBALS.AUTHOR_NAME}</h3>
                                </div>
                                <div>
                                    <p>Tejas is a Senior Project Engineer at L&T Technology Services, as well as being a founder of TEJASKP AI SOFTWARE. Prior to this, he was a Technical Solutions Manager at Redspark Technologies.</p>
                                </div>
                                <div className="mt-3">
                                    <Link className="bg-brand-secondary/20 rounded-full py-2 text-sm text-blue-600 dark:text-blue-500 " href="/about">View Profile</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </>
    )
}

export default ArchieveDetailsPage
