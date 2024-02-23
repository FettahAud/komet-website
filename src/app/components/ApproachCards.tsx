import item1Svg from "@/../public/svg/approach/item-1.svg";
import item2Svg from "@/../public/svg/approach/item-2.svg";
import item3Svg from "@/../public/svg/approach/item-3.svg";
import item4Svg from "@/../public/svg/approach/item-4.svg";
import item5Svg from "@/../public/svg/approach/item-5.svg";
import item6Svg from "@/../public/svg/approach/item-6.svg";
import item7Svg from "@/../public/svg/approach/item-7.svg";
import item7A2Svg from "@/../public/svg/approach/item-7-5.svg";
import item8Svg from "@/../public/svg/approach/item-8.svg";
import ae from "@/../public/svg/approach/Ae.svg";
import ai from "@/../public/svg/approach/Ai.svg";
import ps from "@/../public/svg/approach/PS.svg";
import pr from "@/../public/svg/approach/Pr.svg";
import figma from "@/../public/svg/approach/Figma.svg";
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
        <div className="item item-5">
          <div className="content">
            <h4>Copywriting</h4>
            <p>The contents of the website should flow with the design</p>
          </div>
          <Image className="item-svg" src={item5Svg} alt="" />
        </div>
      </div>
      <div className="col">
        <div className="item item-6">
          <Image className="item-svg" src={item6Svg} alt="" />
          <div className="logos">
            <Image src={ae} alt="Adobe After Effects" />
            <Image src={pr} alt="Adobe Premiere Pro" />
            <Image src={figma} className="fig" alt="Figma" />
            <Image src={ai} alt="Adobe Illustrator" />
            <Image src={ps} alt="Adobe Photoshop" />
          </div>
          <div className="content">
            <h4>Creative Production</h4>
            <p>
              We’ll need visual assets for the designs.
              <br /> Where and how should we produce those?
            </p>
          </div>
        </div>
        <div className="item item-7">
          <Image className="item-svg item-svg-1" src={item7Svg} alt="" />
          <Image className="item-svg item-svg-2" src={item7A2Svg} alt="" />
          <div className="content">
            <h4>Optimization</h4>
            <p>How do we improve the design to maximize conversions?</p>
          </div>
        </div>
        <div className="item item-8">
          <Image className="item-svg" src={item8Svg} alt="" />
          <div className="content">
            <h4>User Testing</h4>
            <p>Is the final design doing the branding justice?</p>
          </div>
        </div>
      </div>
    </div>
  );
}
