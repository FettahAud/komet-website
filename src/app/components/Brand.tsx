"use client";

import Image from "next/image";
import brandSectionBg from "@/../public/svg/brand-section-bg.svg";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText } from "@/app/utils/gsap";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";
import bgPattern from "@/../public/svg/pattern-bg.svg";

import up from "@/../public/svg/up.svg";
import negative from "@/../public/svg/negative.svg";
import star from "@/../public/svg/star-bg.svg";
import money from "@/../public/svg/money-change-bg.svg";
import trend from "@/../public/svg/trend-up-bg.svg";

Chart.register(CategoryScale);

export default function Brand() {
  const text = useRef<HTMLHeadingElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (!text.current) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper.current,
        markers: false,
        pin: true,
        start: "center center",
        end: "+=200% bottom",
        scrub: true,
      },
    });
    const split = new SplitText(text.current, { type: "lines" });
    tl.add("start", 0);
    tl.set(split.lines, { filter: "blur(5px)" });
    tl.to(split.lines, { filter: "blur(0px)", stagger: 0.75 }, "start").to(
      split.lines,
      { filter: "blur(5px)", stagger: 0.5 },
      "start+=1"
    );
    // keep last line
    tl.to(
      split.lines[split.lines.length - 1],
      { filter: "blur(0px)" },
      "end-=1"
    );
  });
  return (
    <div className="brand">
      <div ref={wrapper} className="blur-text-wrapper">
        <Image src={brandSectionBg} alt="" />
        <p>The Key To a Strong Brand</p>
        <h3 ref={text}>
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
      <section>
        <div className="col">
          <div className="outer-wrapper">
            <div className="canvas-wrapper">
              <div className="chart-canvas">
                <Line
                  className="chart"
                  style={{ width: "100%", height: "100%" }}
                  options={{
                    elements: {
                      point: {
                        radius: 0,
                      },
                    },
                    scales: {
                      x: {
                        grid: {
                          color: "#EEE",
                          drawTicks: false,
                        },
                        ticks: {
                          font: {
                            size: 10,
                            lineHeight: 4.2,
                          },
                        },
                        border: {
                          dash: [5, 5],
                        },
                      },
                      y: {
                        display: true,
                        position: "left",
                        grid: {
                          drawTicks: false,
                          //   circular: true,
                          //   drawOnChartArea: false, // only want the grid lines for one axis to show up
                        },
                        ticks: {
                          count: 6,
                          display: false,
                        },
                        border: {
                          dash: [5, 5],
                          display: false,
                        },
                      },
                    },
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                  }}
                  data={{
                    labels: ["", "2020", "2021", "2022", "2023", "2024", ""],
                    datasets: [
                      {
                        data: [0, 100, 200, 300, 400, 500, 600],
                        fill: "start",
                        backgroundColor: "#FF06061A",
                        borderColor: "#FF0606",
                        borderWidth: 1,
                        tension: 0.4,
                      },
                      {
                        data: [0, 0, 100, 200, 400, 1000, 2000],
                        fill: "start",
                        backgroundColor: "#1869FA33",
                        borderColor: "#1869FA",
                        borderWidth: 1,
                        tension: 0.4,
                      },
                    ],
                  }}
                />
                <div className="label up">
                  <Image src={up} alt="" />
                  <span>5x ROAS</span>
                </div>
                <div className="label down">
                  {}
                  <Image src={negative} alt="" />
                  <span>1.75x ROAS</span>
                </div>
              </div>
              <div className="detail">
                <div className="row">
                  <div>
                    <Image src={up} alt="" />
                    <span>Companies that invest in branding</span>
                  </div>
                  <span>5x ROAS</span>
                </div>
                <div className="row">
                  <div>
                    <Image src={negative} alt="" />
                    <span>Companies without a strong brand</span>
                  </div>
                  <span>1.75x ROAS</span>
                </div>
              </div>
            </div>
          </div>
          <h3>
            Leverage <span>marketing</span>
            <br /> that convert
          </h3>
        </div>
        <div className="col second">
          <div className="outer-wrapper">
            <div className="inner-wrapper">
              <Image className="bg-pattern" src={bgPattern} alt="" />
              <div className="cards">
                <div className="card">
                  <Image src={star} alt="" />
                  <div className="content">
                    <h4>25%</h4>
                    <p>Increase in conversion rates</p>
                  </div>
                </div>
                <div className="card">
                  <Image src={money} alt="" />
                  <div className="content">
                    <h4>2X</h4>
                    <p>Increase in advertising ROAS</p>
                  </div>
                </div>
                <div className="card">
                  <Image src={trend} alt="" />
                  <div className="content">
                    <h4>20%</h4>
                    <p>Increase in online sales</p>
                  </div>
                </div>
                <div className="card empty empty-1"></div>
                <div className="card empty empty-2"></div>
              </div>
            </div>
          </div>
          <h3>
            This is the kind of results <span>komet</span>
            <br />
            can provide ...
          </h3>
        </div>
      </section>
    </div>
  );
}
