import Image from "next/image";
import DashedGrid from "../components/DashedGrid";
import bgDot from "@/../public/svg/dot-grid.svg";
export default function Study() {
  return (
    <div className="study">
      {/* <DashedGrid /> */}
      <div className="title">
        <h1>
          Case <span>Study</span>
        </h1>
        <p>A custom skincare provider requiring modern, technical branding.</p>
      </div>
      <div className="items-wrapper">
        <div className="col">
          <div className="item">
            <div className="placeholder-wrapper">
              <Image className="bg-dot" src={bgDot} alt="" />
              <div className="placeholder placeholder-1"></div>
            </div>
            <div className="detail">
              <span className="label">Category</span>
              <h4>Case Study - 1</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="item">
            <div className="placeholder-wrapper">
              <Image className="bg-dot" src={bgDot} alt="" />
              <div className="placeholder placeholder-3"></div>
            </div>
            <div className="detail">
              <span className="label">Category</span>
              <h4>Case Study - 3</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="item">
            <div className="placeholder-wrapper multiple-wrapper">
              <Image className="bg-dot" src={bgDot} alt="" />
              <div className="placeholder placeholder-2-1"></div>
              <div className="placeholder placeholder-2-2"></div>
            </div>
            <div className="detail">
              <span className="label">Category</span>
              <h4>Case Study - 2</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="item">
            <div className="placeholder-wrapper">
              <Image className="bg-dot" src={bgDot} alt="" />
              <div className="placeholder placeholder-4"></div>
            </div>
            <div className="detail">
              <span className="label">Category</span>
              <h4>Case Study - 4</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
