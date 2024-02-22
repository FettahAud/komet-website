import Image from "next/image";

import logo1 from "@/../public/svg/logos/logo-1.svg";
import logo2 from "@/../public/svg/logos/logo-2.svg";
import logo3 from "@/../public/svg/logos/logo-3.svg";
import logo4 from "@/../public/svg/logos/logo-4.svg";
import logo5 from "@/../public/svg/logos/logo-5.svg";
import logo6 from "@/../public/svg/logos/logo-6.svg";

export default function Clients() {
  return (
    <div className="clients">
      <p>
        Our values are part of everything built here, and we are trusted by
        leading companies
      </p>
      <div className="logos">
        <Image src={logo1} alt="" />
        <Image src={logo2} alt="" />
        <Image src={logo3} alt="" />
        <Image src={logo4} alt="" />
        <Image src={logo5} alt="" />
        <Image src={logo6} alt="" />
      </div>
    </div>
  );
}
