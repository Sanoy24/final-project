export default function ProfileMain() {
  //
  return (
    <div className="flex flex-col justify-center rounded-md shadow-md px-5 h-full w-96">
      <div>
        <h1 className=" text-2xl text-red-500 font-semibold">Profile</h1>
      </div>
      <div className=" flex flex-col justify-center items-center gap-4">
        <div className="avatar">
          <div className="w-32 rounded">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <input
          type="file"
          className="file-input file-input-bordered file-input-error w-full max-w-xs file-input-sm"
        />
      </div>
      <form class="w-full max-w-lg">
        <div className="flex flex-wrap flex-row gap-10 py-2">
          <div className="">
            <label
              htmlFor="firstname"
              className=" text-gray-700 text-sm font-bold"
            >
              firstname
            </label>
            <h1>SANOY</h1>
          </div>
          <div>
            <label
              htmlFor="firstname"
              className=" text-gray-700 text-sm font-bold"
            >
              lastname
            </label>
            <h1>YOROM</h1>
          </div>
        </div>
        <div className=" py-5">
          <label htmlFor="email" className=" text-gray-700 text-sm font-bold">
            email
          </label>
          <h2>sanoy@gmail.com</h2>
        </div>
        <div className="flex flex-col my-4 gap-5">
          <div className=" flex  font-bold text-2xl justify-between px-2 rounded-md py-4 shadow-lg">
            <p className=" text-cyan-700">Number of scan today</p>
            <p className=" text-end text-red-500">100</p>
          </div>
          <div className=" flex  font-bold text-2xl justify-between px-2 py-4 shadow-lg rounded-md">
            <p className=" text-cyan-700">Total number of scan</p>
            <p className=" text-end text-red-500">300</p>
          </div>
        </div>
      </form>
    </div>
  );
}
