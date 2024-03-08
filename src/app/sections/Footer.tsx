"use client";
import Image from "next/image";
import Button3D from "../components/Button3D";
import footerImg from "@/../public/svg/footer.svg";
import gradientPath from "@/../public/svg/gradient-path.svg";
import lines from "@/../public/svg/footer-lines.svg";

import x from "@/../public/svg/logos/x.svg";
import facebook from "@/../public/svg/logos/facebook.svg";
import instagram from "@/../public/svg/logos/instagram.svg";

export default function Footer() {
  return (
    <div id="footer">
      <div className="upper-section">
        <div className="title">
          <h2>
            World-class <span>designs</span> that sell.
          </h2>
          <p>We’re a distributed team of highly skilled people.</p>
        </div>
        <div className="button-wrapper">
          <Image src={lines} alt="" />
          <button className="but but-primary">
            <span>Book a call</span>
          </button>
        </div>
      </div>
      <Image src={gradientPath} alt="" className="gradient-path" />
      <div className="bottom-section">
        <div className="header">
          <div className="left">
            <div className="detail">
              <p>hello@komet.studio</p>
              <p>20 Wenlock Road, London, N1 7GU, England, UK</p>
              <p>+44 (50) 728-19-48</p>
            </div>
            <div className="social">
              <a href="https://www.twitter.com/">
                <Image src={x} alt="twitter" />
              </a>
              <a href="https://www.instagram.com/">
                <Image src={instagram} alt="instagram" />
              </a>
              <a href="https://www.facebook.com/">
                <Image src={facebook} alt="facebook" />
              </a>
            </div>
          </div>
          <div className="right">
            <ul>
              <li>
                <a href="">Work</a>
              </li>
              <li>
                <a href="">Capabilities</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copy-right">
          <p>Copyright 2024. all right reserved</p>
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              })
            }
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </div>
  );
}
