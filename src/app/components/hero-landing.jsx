import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const links = {
    name: "login",
    href: "/login",
  };
  return (
    <div className=" flex flex-row align-middle mt-28">
      <div className=" pl-10 text-slate-50  font-extrabold text-balance align-middle text-4xl">
        <h1>Precise Chest X-Ray Imaging for Accurate Diagnoses</h1>
        <h2>
          Empowering Better Healthcare Through Advanced Imaging Technology
        </h2>
        <Link key={links.name} href={links.href}>
          <button className=" h-16 w-32 bg-blue-900">Login</button>
        </Link>
      </div>
      <div className=" px-10 flex flex-wrap">
        <Image src="/doc-img-four.png" height={400} width={500} className=" " />
      </div>
    </div>
  );
}
