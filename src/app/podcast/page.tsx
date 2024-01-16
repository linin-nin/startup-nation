import PodcastComponent from "@/components/Podcast";
import React from "react";

function PodcastPage() {
  return (
    // container
    <div className="max-w-[1080px] mx-auto px-5">
      {/* children   */}
      <PodcastComponent />
    </div>
  );
}

export default PodcastPage;
