import item1Svg from "@/../public/svg/approach/item-1.svg";
import item2Svg from "@/../public/svg/approach/item-2.svg";
import item3Svg from "@/../public/svg/approach/item-3.svg";
import item4Svg from "@/../public/svg/approach/item-4.svg";
import item5Svg from "@/../public/svg/approach/item-5.svg";
import bgDots from "@/../public/svg/pattern-bg.svg";
import Image from "next/image";

export default function ApproachCards() {
  return (
    <div className="items-wrapper">
      <div className="col">
        <div className="item item-1">
          <Image className="item-svg" src={item1Svg} alt="" />
          <Image className="bg-dots" src={bgDots} alt="" />
          <div className="content">
            <h4>Branding</h4>
            <p>What should the brand feel like?</p>
          </div>
        </div>
        <div className="item item-2">
          <Image className="item-svg" src={item2Svg} alt="" />
          <div className="content">
            <h4>Web Design</h4>
            <p>
              We need a website that looks good
              <br /> but isn’t heavy or complicated.
            </p>
          </div>
        </div>
        <div className="item item-3">
          <Image className="item-svg" src={item3Svg} alt="" />
          <div className="content">
            <h4>Development</h4>
            <p>How do we build the website as the designer intended?</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="item item-4">
          <div className="content">
            <h4>Art Direction</h4>
            <p>What colors, styles, aesthetics should it adopt?</p>
          </div>
          <Image className="item-svg" src={item4Svg} alt="" />
        </div>
        <div className="item item-4">
          <div className="content">
            <h4>Copywriting</h4>
            <p>The contents of the website should flow with the design</p>
          </div>
          <Image className="item-svg" src={item5Svg} alt="" />
        </div>
      </div>
      <div className="col"></div>
    </div>
  );
}
