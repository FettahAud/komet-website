import Image from "next/image";

import blackHole from "@/../public/svg/blackhole.svg";
import blurPath from "@/../public/svg/blur-path.svg";
import Button3D from "@/app/components/Button3D";
import CanvasWrapper from "@/app/3d/Canvas";

export default function Hero() {
  return (
    <main className="hero">
      <div className="header">
        <h1 className="title">
          World-class <span>designs</span> that sell.
        </h1>
        <p>We’re a distributed team of highly skilled people.</p>
        <Button3D text="Book a call" />
      </div>
      <div className="canvas">
        <Image src={blackHole} alt="" />
        <Image src={blurPath} alt="" />
        <CanvasWrapper />
      </div>
    </main>
  );
}
