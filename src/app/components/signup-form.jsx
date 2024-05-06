export default function SignUp() {
  return (
    <form class="w-full max-w-lg">
      <div className="text-center py-5 font-extrabold text-blue-500 text-4xl">
        Sign Up
      </div>
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
          type="password"
          name="password"
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
            password
          </label>
          <input
            type="password"
            name="firstname"
            id="firstname"
            placeholder="Password"
            className=" mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          />
        </div>
        <div>
          <label
            htmlFor="firstname"
            className=" text-gray-700 text-sm font-bold"
          >
            confirm password
          </label>
          <input
            type="password"
            name="lastname"
            id="lastname"
            placeholder="Confirm password"
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
          Sign Up
        </button>
      </div>
    </form>
  );
}
