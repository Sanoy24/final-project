"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ImageDisplay() {
  const [originalImage, setOriginalImage] = useState(null);
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setOriginalImage(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <div className="container mx-auto mt-8 fixed">
      <div className="flex items-center justify-center w-full  gap-9">
        <label
          for="dropzone-file"
          className="flex flex-col items-center justify-center w-64 h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div class="flex flex-col items-center justify-center">
            <svg
              class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="font-semibold">Click to upload</span>
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </label>
        <div>
          <Link href={"/helpmodel"}>
            <button class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Help Model
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-row gap-10">
        <div className=" mx-10">
          {originalImage && (
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">Original Image</h2>
              <div class="w-80 h-80 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img
                  src={originalImage}
                  alt="Original"
                  className="  object-fill w-80 h-80 rounded-md"
                />
              </div>
            </div>
          )}
        </div>
        <div className="">
          {originalImage && (
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">Processed Image</h2>
              <div class="w-80 h-80 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img
                  src={originalImage}
                  alt="Original"
                  className="  object-fill w-80 h-80 rounded-md"
                />
              </div>
            </div>
          )}
        </div>
        <div className=" mt-5">
          <h1 className=" text-2xl font-bold">Description</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            eligendi!
          </p>
        </div>
      </div>
    </div>
  );
}
