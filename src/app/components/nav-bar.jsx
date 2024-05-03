import Link from "next/link";
import { IconContext } from "react-icons";
import { FaStethoscope } from "react-icons/fa";
const links = [
  { name: "SignIn", href: "/login" },
  { name: "SignUp", href: "/signup" },
];
export default function Navbar() {
  return (
    <div>
      <div className=" w-fullbg-gradient-to-r from-fuchsia-600 to-purple-600 flex py-4 px-10 flex-row justify-between shadow-md h-20 items-center text-slate-300 font-medium text-lg bg-transparent">
        <div className=" pt-2">
          <FaStethoscope fontSize={50} color="white" />
        </div>

        <div className="flex flex-row justify-center items-end gap-7 text-blue-800">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className=" text-white">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
