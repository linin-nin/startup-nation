"use client";
import dynamic from "next/dynamic";
import ShareArrow from "./ShareArrow";
import { Media } from "@/lib/utils/media";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const VideoContent = ({ data }: { data: any[] }) => {
  return (
    <div>
      <h1 className="border-t-2 border-b-2 py-3 title">Side Project</h1>

      {/* layout 1 */}
      <div className="py-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.slice(0, 3).map((items) => (
          <div
            key={items.id}
            className="box overflow-hidden bg-slate-300 h-[555px] border-2 border-white relative sm:col-span-2 lg:col-span-1"
          >
            <div>
              <ReactPlayer
                url={Media(items.video_url)}
                playing
                loop
                muted
              />
            </div>
            <div className="content hover:opacity-100 p-5">
              <h1 className="title">{items.company_name}</h1>
              <p className="paragraph">{items.dirscription}</p>
              <ShareArrow url={`/startup-directory/${items.slug}`} />
            </div>
          </div>
        ))}
      </div>

      {/* layout 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 lg:grid-cols-2">
        {data.slice(3, 7).map((items, index) => (
          <div
            key={index}
            className="box overflow-hidden bg-slate-300 h-[708px] border-2 border-white relative"
          >
            <div>
              <ReactPlayer
                url={Media(items.video_url)}
                playing
                loop
                muted
                width="1270px"
                height="100%"
              />
            </div>
            <div className="content hover:opacity-100 p-5">
              <h1 className="title">{items.company_name}</h1>
              <p className="paragraph">{items.dirscription}</p>
              <ShareArrow url={`/startup-directory/${items.slug}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoContent;
