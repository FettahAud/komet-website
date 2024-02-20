"use client";
import { useEffect } from "react";
import { calculateRem } from "../utils/calculateRem";

export default function LayoutSetup() {
  useEffect(() => {
    calculateRem();
    window.addEventListener("resize", () => () => calculateRem());
    return () =>
      window.removeEventListener("resize", () => () => calculateRem());
  }, []);
  return <></>;
}
