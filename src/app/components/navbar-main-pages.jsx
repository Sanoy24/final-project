"use client";
import Link from "next/link";
import { IconContext } from "react-icons";
import { FaStethoscope } from "react-icons/fa";
const links = [
  { name: "chat", href: "/chat" },
  { name: "logout", href: "/login" },
];
export default function NavbarMain() {
  return (
    <div className=" w-full bg-gradient-to-r from-fuchsia-600 to-purple-600 flex py-4 px-10 flex-row justify-between shadow-md h-20 items-center text-slate-300 font-medium text-lg">
      <div className="flex gap-4 flex-row pt-2">
        <FaStethoscope fontSize={50} color="white" />
        <div className=" content-center">
          <h1 className=" text-white text-2xl">ScriptSquad</h1>
        </div>
      </div>
      <div className="flex flex-row gap-7">
        <div className="avatar pt-2 content-center">
          <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <a href="/profile">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </a>
          </div>
        </div>
        <div className="flex flex-row justify-end items-end gap-7 text-blue-800">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className=" text-slate-100 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
