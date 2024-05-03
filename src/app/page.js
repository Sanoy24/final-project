import Image from "next/image";
import Navbar from "./components/nav-bar";
import Hero from "./components/hero-landing";

export default function Home() {
  return (
    <main className=" h-screen bg-gradient-to-r from-purple-500 to-purple-900">
      <div className="  ">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}
