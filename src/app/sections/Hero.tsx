import Image from "next/image";

import blackHole from "@/../public/svg/blackhole.svg";
import blurPath from "@/../public/svg/blur-path.svg";
import Button3D from "@/app/components/Button3D";
import CanvasWrapper from "@/app/threeD/Canvas";
import { SparklesCore } from "../components/Sparkles";

export default function Hero() {
  return (
    <main className="hero">
      <div className="header">
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={300}
          particleColor="#D9D9D9"
        />
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
