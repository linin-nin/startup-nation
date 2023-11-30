"use client"
import Marquee from "react-fast-marquee"

function MarqueeComponent() {
    return (
        <div>
            <Marquee
                speed={60}
                direction="left"
                className="marquee text-[500] border border-white p-2 text-[1rem] md:text-[1.5rem] font-medium"
            >
                <ul className="flex [&>*:nth-child(odd)]:text-[#F8DC4C]">
                    <li>STARTUPNATION LAB</li>
                    <li>STARTUPNATION LAB</li>
                    <li>STARTUPNATION LAB</li>
                    <li>STARTUPNATION LAB</li>
                    <li>STARTUPNATION LAB</li>
                    <li>STARTUPNATION LAB</li>
                    <li>STARTUPNATION LAB</li>
                    <li>STARTUPNATION LAB</li>
                </ul>
            </Marquee>
        </div>
    )
}

export default MarqueeComponent