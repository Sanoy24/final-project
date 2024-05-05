import Image from "next/image";

export default function ProfileSidebar() {
  return (
    <div className=" py-10 w-full bg-slate-50 rounded shadow-lg h-full">
      <div className="avatar flex justify-center">
        <div className="w-24 mask mask-squircle">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <div className=" text-center font-bold text-xl">
        <h1 className=" pt-3">SANOY YOROM</h1>
        <h2 className=" font-normal">Doctor</h2>
      </div>
      <div className="flex justify-center">
        <a href="/profile/edit">
          <button className=" bg-blue-600 font-medium text-white py-2 rounded px-5 justify-center hover:bg-indigo-600">
            edit profile
          </button>
        </a>
      </div>
    </div>
  );
}
