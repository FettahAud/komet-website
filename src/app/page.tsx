import Header from "@/app/components/Header";
import "./styles/index.scss";
import Clients from "./components/Clients";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div id="home">
      <Header />
      <Hero />
      <Clients />
    </div>
  );
}
