import topGradient from "@/../public/svg/approach-gradient.svg";
import Image from "next/image";
import ApproachCards from "../components/ApproachCards";
import { SparklesCore } from "../components/Sparkles";

export default function Approach() {
  return (
    <div className="approach">
      <Image className="bg-gradient" src={topGradient} alt="" />
      <div className="header">
        {/* TODO: Fix canvas only for first component initialized */}
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={300}
          particleColor="#D9D9D9"
        />
        <h1>
          Our <span>Approach</span>
        </h1>
        <p>
          A large team of experts under one roof to build a seamless experience
          for brands.
        </p>
      </div>
      <ApproachCards />
    </div>
  );
}
