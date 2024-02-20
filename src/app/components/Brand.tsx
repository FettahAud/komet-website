"use client";

import Image from "next/image";
import brandSectionBg from "@/../public/svg/brand-section-bg.svg";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText } from "@/app/utils/gsap";

export default function Brand() {
  const text = useRef<HTMLHeadingElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (!text.current) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper.current,
        markers: false,
        pin: true,
        start: "top top",
        end: "+=200%",
        scrub: true,
      },
    });
    const split = new SplitText(text.current, { type: "lines" });
    tl.add("start", 0);
    tl.set(split.lines, { filter: "blur(5px)" });
    tl.to(split.lines, { filter: "blur(0px)", stagger: 0.5 }, "start").to(
      split.lines,
      { filter: "blur(5px)", stagger: 0.5 },
      "start+=.5"
    );
    // keep last line
    tl.to(
      split.lines[split.lines.length - 1],
      { filter: "blur(0px)" },
      "end-=1"
    );
  });
  return (
    <div className="brand">
      <div ref={wrapper} className="blur-text-wrapper">
        <Image src={brandSectionBg} alt="" />
        <p>The Key To a Strong Brand</p>
        <h3 ref={text}>
          Clear, beautiful <span>Websites</span> that convert
          <br />
          Unique <span>Branding</span> that builds trust
          <br />
          Bold <span>Creatives</span> that make advertising profitable
          <br />
          <span>Copywriting</span> that sells
          <br />
          <span>Robust,</span> responsive and bug-free experiences
        </h3>
      </div>
    </div>
  );
}
