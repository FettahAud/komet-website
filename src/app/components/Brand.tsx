import Image from "next/image";
import brandSectionBg from "@/../public/svg/brand-section-bg.svg";

export default function Brand() {
  return (
    <div className="brand">
      <div className="blur-text-wrapper">
        <Image src={brandSectionBg} alt="" />
        <p>The Key To a Strong Brand</p>
        <h3>
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
