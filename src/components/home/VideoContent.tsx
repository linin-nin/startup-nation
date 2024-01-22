"use client";
import dynamic from "next/dynamic";
import ShareArrow from "../ShareArrow";
import { Media } from "@/lib/utils/media";
import { useState } from "react";
import Grid from "../gridStyle";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const VideoContent = ({ data }: { data: any[] }) => {
  const [Isopen, setIsopen] = useState(false);

  return (
    <div>
      <h1 className="border-t-2 border-b-2 py-3 title">Side Project</h1>

      {/* layout 1 */}
      <Grid cols={3} className="py-7 gap-6">
        {data.slice(0, 3).map((items) => {
          return (
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
                  width="1000px"
                  height="100%"
                />
              </div>

              <div className="content hover:opacity-100 p-5">
                <h1 className="title">{items.company_name}</h1>
                <p
                  className={`paragraph line-clamp-3 ${
                    Isopen ? "line-clamp-none" : "line-clamp-3"
                  }`}
                >
                  {items.dirscription}
                </p>
                <p
                  onClick={() => setIsopen(!Isopen)}
                  className="hover:underline"
                >
                  {Isopen ? "see less" : "see more"}
                </p>
                <ShareArrow url={`/startup-directory/${items.slug}`} />
              </div>
            </div>
          );
        })}
      </Grid>

      {/* layout 2 */}
      <Grid cols={2} className="gap-6">
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
              <p
                className={`paragraph ${
                  Isopen ? "line-clamp-none" : "line-clamp-3"
                }`}
              >
                {items.dirscription}
              </p>
              <p onClick={() => setIsopen(!Isopen)} className="hover:underline">
                {Isopen ? "see less" : "see more"}
              </p>
              <ShareArrow url={`/startup-directory/${items.slug}`} />
            </div>
          </div>
        ))}
      </Grid>
    </div>
  );
};

export default VideoContent;
