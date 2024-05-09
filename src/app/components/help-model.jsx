"use client";
import Link from "next/link";
import { useState } from "react";
import labels from "../util/labels";

export default function HelpModel() {
  const [imageName, setImageName] = useState(null);
  const handleImageUpload = (event) => {
    const files = event.target.files[0];
    const fileName = files.name;
    setImageName(fileName);
  };

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px] bg-white hover:cursor-pointer">
        <form className="py-6 px-9 hover:cursor-pointer">
          <div className="mb-6 pt-4 ">
            <label className="mb-5 block text-xl font-semibold text-[#07074D]">
              Upload File
            </label>

            <div className="mb-8 ">
              <input
                type="file"
                name="file"
                id="file"
                accept="image/*"
                className="sr-only "
                onChange={handleImageUpload}
              />
              <label
                for="file"
                className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center cursor-pointer"
              >
                <div>
                  <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                    Drop file here
                  </span>
                  <span className="mb-2 block text-base font-medium text-[#6B7280]">
                    Or
                  </span>
                  <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                    Browse
                  </span>
                </div>
              </label>
            </div>

            <div className="rounded-md bg-[#F5F7FB] py-4 px-8">
              <div className="flex items-center justify-between">
                <span class="truncate pr-3 text-base font-medium text-[#07074D]">
                  {imageName}
                </span>
              </div>
            </div>
          </div>
          <div className="block my-2">
            <select className="select select-info w-full max-w-xs">
              <option disabled selected>
                Select label
              </option>
              {labels.map((options) => (
                <option value={options.name} key={options.id}>
                  {options.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <Link href={"/scan"}>
              <button class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Send File
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
