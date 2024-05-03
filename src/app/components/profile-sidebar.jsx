import Image from "next/image";

export default function ProfileSidebar() {
  return (
    <div className="">
      <div className=" py-10 w-80 bg-slate-50 rounded shadow-lg">
        <div className="">
          <Image
            src="/profile.jpg"
            width={300}
            height={300}
            alt="Picture of the author"
            className=" h-20 w-20 rounded-full border-4 border-white dark:border-gray-800 mx-auto object-cover"
          />
        </div>
        <div className=" text-center font-bold text-xl">
          <h1>Mokey D. Luffy</h1>
          <h2 className=" font-normal">Doctor</h2>
          <input type="file" name="" id="" />
        </div>
        <div className="flex flex-col my-4 gap-5">
          <div className=" flex  font-bold text-2xl justify-between px-2 rounded-md py-4 shadow-lg">
            <p className=" text-cyan-700">Number of scan</p>
            <p className=" text-end text-red-500">100</p>
          </div>
          <div className=" flex  font-bold text-2xl justify-between px-2 py-4 shadow-lg rounded-md">
            <p className=" text-cyan-700">Total number of scan</p>
            <p className=" text-end text-red-500">300</p>
          </div>
        </div>
      </div>
    </div>
  );
}
