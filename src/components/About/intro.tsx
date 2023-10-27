"use client"
import ReactPlayer from 'react-player'

const Intro = () => {
  return (
    <main className='flex  justify-start border-b-2 border-white pt-5'>
      <h2 className='title'>ABOUT<br/><span className='text-yellow-400'>STARTUPNATION LAB</span></h2>
      <div className='ml-[80px] relative before:absolute before:w-[2px] before:h-[100%] before:top-0 before:l-0 before:bg-white'>
        <div  className='pl-7 pb-7'>
          <h2 className='title'>
            StartupNation is a flagship community program of DreamsLAB for boot camp, heckathon, incubation, accelerator and investing.
          </h2>
          <div className='w-full h-[500px] bg-yellow-400'>
            <ReactPlayer url='/image/vid1.mp4' playing={true} loop={true} controls width="100%" height="100%"/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Intro