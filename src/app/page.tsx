import Header from "@/app/components/Header";
import "./styles/index.scss";
import Clients from "./sections/Clients";
import Hero from "./sections/Hero";
import Brand from "./sections/Brand";
import Approach from "./sections/Approach";
import Process from "./sections/Process";
import Study from "./sections/Study";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <div id="home">
      <Header />
      <Hero />
      <Clients />
      <Brand />
      <Approach />
      <Process />
      <Study />
      <Footer />
    </div>
  );
}
