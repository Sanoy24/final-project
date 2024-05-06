export default function ProfileDetail() {
  //
  return (
    <div className="flex flex-col justify-center rounded-md shadow-md p-8">
      <div>
        <h1 className=" text-2xl text-red-500 font-semibold">update profile</h1>
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
            <input
              type="text"
              name="firstname"
              id="firstname"
              className=" mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Yorom"
            />
          </div>
          <div>
            <label
              htmlFor="firstname"
              className=" text-gray-700 text-sm font-bold"
            >
              lastname
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Sanoy"
            />
          </div>
        </div>
        <div className=" py-5">
          <label htmlFor="email" className=" text-gray-700 text-sm font-bold">
            email
          </label>
          <input
            type="email"
            name="email"
            id="passwod"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="you@example.com "
          />
        </div>

        <div className="flex flex-wrap flex-row gap-10 py-2">
          <div className="">
            <label
              htmlFor="firstname"
              className=" text-gray-700 text-sm font-bold"
            >
              current password
            </label>
            <input
              type="currenPassword"
              name="currentPassword"
              id="currentPassword"
              placeholder="Password"
              className=" mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </div>
          <div>
            <label
              htmlFor="newPassword"
              className=" text-gray-700 text-sm font-bold"
            >
              new password
            </label>
            <input
              type="newPassword"
              name="newPassword"
              id="newPassword"
              placeholder="new password"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </div>
          <select className="select select-info w-full max-w-xs">
            <option disabled selected>
              Select Profession
            </option>
            <option>English</option>
            <option>Japanese</option>
            <option>Italian</option>
          </select>
        </div>
        <div className=" mt-5 gap-6 flex text-center self-center justify-center">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-40"
            type="button"
          >
            Update
          </button>
        </div>
        <div className=" h-4"></div>
      </form>
    </div>
  );
}
