import topGradient from "@/../public/svg/approach-gradient.svg";
import Image from "next/image";

export default function Approach() {
  return (
    <div className="approach">
      <Image className="bg-gradient" src={topGradient} alt="" />
      <div className="header">
        <h1>
          Our <span>Approach</span>
        </h1>
        <p>
          A large team of experts under one roof to build a seamless experience
          for brands.
        </p>
      </div>
      <div className="items-wrapper">
        <div className="item item-1"></div>
      </div>
    </div>
  );
}
