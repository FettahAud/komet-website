import Image from "next/image";
import bgGrid from "@/../public/svg/bg-grid.svg";
import graph from "@/../public/svg/process-graph.svg";
import overlay from "@/../public/svg/overlay.svg";
export default function Process() {
  return (
    <div className="process">
      <Image src={bgGrid} className="bg-grid" alt="" />
      <Image src={overlay} className="overlay" alt="" />
      <h1>
        Our <span>Process</span>
      </h1>
      <Image src={graph} className="graph" alt="" />
    </div>
  );
}
