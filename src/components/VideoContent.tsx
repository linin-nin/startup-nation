
import Image from 'next/image'
import React from 'react'
import ShareArrow from './ShareArrow'
import { download, strayImg, goku, levi, levi2, spiderman, naruto, itachi } from '../../public/image'

const VideoContent = () => {
    return (
        <div className='padding-body'>

            <h1 className='border-t-2 border-b-2 py-3 title'>Side Project</h1>

            {/* layout 1 */}
            <div className="py-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="box bg-slate-300 h-[555px] border-2 border-white relative">
                    <Image
                        src={naruto}
                        alt=''
                        className='w-full h-full object-cover'
                    />
                    <div className='content hover:opacity-100 p-5'>
                        <h1 className='title'>Dreamslab</h1>
                        <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nobis exercitationem commodi perferendis ea expedita nam, reprehenderit porro tempora illum numquam velit dolorem, architecto libero corrupti aspernatur deserunt sunt natus.</p>
                        <ShareArrow />
                    </div>
                </div>
                <div className="box bg-slate-300 h-[555px] border-2 border-white relative">
                    <Image
                        src={itachi}
                        alt=''
                        className='w-full h-full object-cover'
                    />
                    <div className='content hover:opacity-100 p-5'>
                        <h1 className='title'>Dreamslab</h1>
                        <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nobis exercitationem commodi perferendis ea expedita nam, reprehenderit porro tempora illum numquam velit dolorem, architecto libero corrupti aspernatur deserunt sunt natus.</p>
                        <ShareArrow />
                    </div>
                </div>
                <div className="box bg-slate-300 h-[555px] border-2 border-white relative sm:col-span-2 lg:col-span-1">
                    <Image
                        src={goku}
                        alt=''
                        className='w-full h-full object-cover'
                    />
                    <div className='content hover:opacity-100 p-5'>
                        <h1 className='title'>Dreamslab</h1>
                        <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nobis exercitationem commodi perferendis ea expedita nam, reprehenderit porro tempora illum numquam velit dolorem, architecto libero corrupti aspernatur deserunt sunt natus.</p>
                        <ShareArrow/>
                    </div>
                </div>

            </div>

            {/* layout 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="box bg-slate-300 h-[708px] border-2 border-white relative">
                    <Image
                        src={levi}
                        alt=''
                        className='w-full h-full object-cover'
                    />
                    <div className='content hover:opacity-100 p-5'>
                        <h1 className='title'>Dreamslab</h1>
                        <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nobis exercitationem commodi perferendis ea expedita nam, reprehenderit porro tempora illum numquam velit dolorem, architecto libero corrupti aspernatur deserunt sunt natus.</p>
                        <ShareArrow/>
                    </div>

                </div>
                <div className="box bg-slate-300 h-[708px] border-2 border-white relative">
                    <Image
                        src={levi2}
                        alt=''
                        className='w-full h-full object-cover'
                    />
                    <div className='content hover:opacity-100 p-5'>
                        <h1 className='title'>Dreamslab</h1>
                        <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nobis exercitationem commodi perferendis ea expedita nam, reprehenderit porro tempora illum numquam velit dolorem, architecto libero corrupti aspernatur deserunt sunt natus.</p>
                        <ShareArrow/>
                    </div>

                </div>
                <div className="box bg-slate-300 h-[708px] border-2 border-white relative">
                    <Image
                        src={spiderman}
                        alt=''
                        className='w-full h-full object-cover'
                    />
                    <div className='content hover:opacity-100 p-5'>
                        <h1 className='title'>Dreamslab</h1>
                        <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nobis exercitationem commodi perferendis ea expedita nam, reprehenderit porro tempora illum numquam velit dolorem, architecto libero corrupti aspernatur deserunt sunt natus.</p>
                        <ShareArrow/>
                    </div>
                </div>
                <div className="box bg-slate-300 h-[708px] border-2 border-white relative">
                    <Image
                        src={strayImg}
                        alt=''
                        className='w-full h-full object-cover'
                    />
                    <div className='content hover:opacity-100 p-5'>
                        <h1 className='title'>Dreamslab</h1>
                        <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nobis exercitationem commodi perferendis ea expedita nam, reprehenderit porro tempora illum numquam velit dolorem, architecto libero corrupti aspernatur deserunt sunt natus.</p>
                        <ShareArrow/>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default VideoContent