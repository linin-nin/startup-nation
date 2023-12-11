import dynamic from "next/dynamic";
import ShareArrow from "./ShareArrow";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const VideoContent = () => {
  return (
    <div>
      <h1 className="border-t-2 border-b-2 py-3 title">Side Project</h1>

      {/* layout 1 */}
      <div className="py-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="box overflow-hidden bg-slate-300 h-[555px] border-2 border-white relative">
          {/* <video autoPlay muted loop className="w-full h-full object-cover">
            <source src="/image/vid1.mp4" type="video/mp4" />
          </video> */}
          <div>
            <ReactPlayer
              url="/image/vid1.mp4"
              playing
              loop
              muted
              width="100%"
              height="100%"
            />
          </div>
          <div className="content hover:opacity-100 p-5">
            <h1 className="title">Dreamslab</h1>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              nobis exercitationem commodi perferendis ea expedita nam,
              reprehenderit porro tempora illum numquam velit dolorem,
              architecto libero corrupti aspernatur deserunt sunt natus.
            </p>
            <ShareArrow />
          </div>
        </div>
        <div className="box overflow-hidden bg-slate-300 h-[555px] border-2 border-white relative">
          {/* <video autoPlay muted loop className="w-full h-full object-cover">
            <source src="/image/vid2.mp4" type="video/mp4" />
          </video> */}
          <div>
            <ReactPlayer
              url="/image/vid2.mp4"
              playing
              loop
              muted
              width="1000px"
              height="100%"
            />
          </div>
          <div className="content hover:opacity-100 p-5">
            <h1 className="title">Dreamslab</h1>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              nobis exercitationem commodi perferendis ea expedita nam,
              reprehenderit porro tempora illum numquam velit dolorem,
              architecto libero corrupti aspernatur deserunt sunt natus.
            </p>
            <ShareArrow />
          </div>
        </div>
        <div className="box overflow-hidden bg-slate-300 h-[555px] border-2 border-white relative sm:col-span-2 lg:col-span-1">
          {/* <video autoPlay muted loop className="w-full h-full object-cover">
            <source src="/image/vid3.mp4" type="video/mp4" />
          </video> */}
          <div>
            <ReactPlayer
              url="/image/vid3.mp4"
              playing
              loop
              muted
              width="1000px"
              height="100%"
            />
          </div>
          <div className="content hover:opacity-100 p-5">
            <h1 className="title">Dreamslab</h1>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              nobis exercitationem commodi perferendis ea expedita nam,
              reprehenderit porro tempora illum numquam velit dolorem,
              architecto libero corrupti aspernatur deserunt sunt natus.
            </p>
            <ShareArrow />
          </div>
        </div>
      </div>

      {/* layout 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="box overflow-hidden bg-slate-300 h-[708px] border-2 border-white relative">
          {/* <video autoPlay muted loop className="w-full h-full object-cover">
            <source src="/image/vid4.mp4" type="video/mp4" />
          </video> */}
          <div>
            <ReactPlayer
              url="/image/vid4.mp4"
              playing
              loop
              muted
              width="1260px"
              height="100%"
            />
          </div>
          <div className="content hover:opacity-100 p-5">
            <h1 className="title">Dreamslab</h1>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              nobis exercitationem commodi perferendis ea expedita nam,
              reprehenderit porro tempora illum numquam velit dolorem,
              architecto libero corrupti aspernatur deserunt sunt natus.
            </p>
            <ShareArrow />
          </div>
        </div>
        <div className="box overflow-hidden bg-slate-300 h-[708px] border-2 border-white relative">
          {/* <video autoPlay muted loop className="w-full h-full object-cover">
            <source src="/image/vid5.mp4" type="video/mp4" />
          </video> */}
          <div>
            <ReactPlayer
              url="/image/vid5.mp4"
              playing
              loop
              muted
              width="1270px"
              height="100%"
            />
          </div>
          <div className="content hover:opacity-100 p-5">
            <h1 className="title">Dreamslab</h1>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              nobis exercitationem commodi perferendis ea expedita nam,
              reprehenderit porro tempora illum numquam velit dolorem,
              architecto libero corrupti aspernatur deserunt sunt natus.
            </p>
            <ShareArrow />
          </div>
        </div>
        <div className="box overflow-hidden bg-slate-300 h-[708px] border-2 border-white relative">
          {/* <video autoPlay muted loop className="w-full h-full object-cover">
            <source src="/image/vid6.mp4" type="video/mp4" />
          </video> */}
          <div>
            <ReactPlayer
              url="/image/vid6.mp4"
              playing
              loop
              muted
              width="1270px"
              height="100%"
            />
          </div>

          <div className="content hover:opacity-100 p-5">
            <h1 className="title">Dreamslab</h1>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              nobis exercitationem commodi perferendis ea expedita nam,
              reprehenderit porro tempora illum numquam velit dolorem,
              architecto libero corrupti aspernatur deserunt sunt natus.
            </p>
            <ShareArrow />
          </div>
        </div>
        <div className="box overflow-hidden bg-slate-300 h-[708px] border-2 border-white relative">
          <div>
            <ReactPlayer
              url="/image/vid7.mp4"
              playing
              loop
              muted
              width="1300px"
              height="100%"
            />
          </div>
          <div className="content hover:opacity-100 p-5">
            <h1 className="title">Dreamslab</h1>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              nobis exercitationem commodi perferendis ea expedita nam,
              reprehenderit porro tempora illum numquam velit dolorem,
              architecto libero corrupti aspernatur deserunt sunt natus.
            </p>
            <ShareArrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoContent;
