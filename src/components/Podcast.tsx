
import React from 'react'
import Link from 'next/link'
import { podcastData } from '@/lib/podcastData/podcastData'




function PodcastComponent() {
    return (
        <div>
            {/* title  */}
            <div className='border-t-2 border-b-2 py-3 mb-7 title'>PODCAST</div>

            {/* podcast layout  */}
            <div className=' grid grid-cols-3 grid-rows-2 h-[600px] gap-5'>
                {
                    podcastData.map((data, index) => {
                        if (index === 0) {
                            return (
                                <div key={index} className='bg-yellow-500  first-podcast-layout relative'>
                                    <video
                                        style={{ objectFit: "cover", width: '100%', height: '100%' }} src={data.podcastURL}
                                        autoPlay
                                        muted
                                        loop
                                    ></video>
                                    <div className='dark-gradient-overlay'>
                                        <div className='text-[58px] mt-56 mx-10 text-[#F8DC4C] hover:underline'>
                                            {data.podcastTitle}
                                        </div>
                                        <p className='mx-10'>{data.podcastSubTitle}</p>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div key={index} className='bg-yellow-500 relative'>
                                    <video
                                        style={{ objectFit: "cover", width: '100%', height: '100%' }} src={data.podcastURL}
                                        autoPlay
                                        muted
                                        loop

                                    ></video>
                                    <div className='dark-gradient-overlay'>
                                        {/* play-icon  */}
                                        <div className='duration-1000 opacity-0 hover:opacity-100 hover:cursor-pointer absolute inset-0 flex items-end'>
                                            <div className='m-5 flex items-center'>
                                                {/* play podcast icon  */}
                                                <svg className='' width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_250_7)">
                                                        <path d="M2.92996 17.07C1.97486 16.1476 1.21303 15.0441 0.688943 13.8241C0.164853 12.604 -0.111009 11.2918 -0.122547 9.96403C-0.134085 8.63624 0.118932 7.31944 0.62174 6.09048C1.12455 4.86151 1.86708 3.745 2.80601 2.80607C3.74493 1.86714 4.86145 1.12461 6.09042 0.621801C7.31938 0.118993 8.63618 -0.134024 9.96397 -0.122486C11.2918 -0.110948 12.604 0.164914 13.824 0.689004C15.044 1.21309 16.1475 1.97492 17.07 2.93002C18.8915 4.81604 19.8995 7.34206 19.8767 9.96403C19.8539 12.586 18.8022 15.0941 16.9481 16.9482C15.0941 18.8023 12.5859 19.854 9.96397 19.8768C7.342 19.8995 4.81598 18.8916 2.92996 17.07ZM15.66 15.66C17.1611 14.1589 18.0044 12.1229 18.0044 10C18.0044 7.87711 17.1611 5.84114 15.66 4.34002C14.1588 2.83889 12.1229 1.99557 9.99996 1.99557C7.87705 1.99557 5.84108 2.83889 4.33996 4.34002C2.83883 5.84114 1.99551 7.87711 1.99551 10C1.99551 12.1229 2.83883 14.1589 4.33996 15.66C5.84108 17.1611 7.87705 18.0045 9.99996 18.0045C12.1229 18.0045 14.1588 17.1611 15.66 15.66ZM6.99996 6.00002L15 10L6.99996 14V6.00002Z" fill="white" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_250_7">
                                                            <rect width="20" height="20" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                {/* podcast title  */}
                                                <p className='mx-3'>{data.podcastTitle}</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>

            {/* button expore more podcast  */}
            <div className="flex justify-center my-10">
                <Link className="title p-3 border-effect  " href={"#"}>
                    EXPLORE <span className="text-[#F8DC4C]">PODCAST</span>
                    <span>
                        {/* arrow right icon  */}
                        <svg
                            className="inline-block ml-5"
                            width="32"
                            height="14"
                            viewBox="0 0 38 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M38 7L26.0813 0.118719V13.8813L38 7ZM0 8.19187H27.2731V5.80813H0L0 8.19187Z"
                                fill="white"
                            />
                        </svg>
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default PodcastComponent