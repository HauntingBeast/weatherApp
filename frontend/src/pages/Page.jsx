import React from "react";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
const Page = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] md:min-w-[950px] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 ">
      <div className="flex text-slate-50 mt-auto px-4 py-8">
        <div className="justify-between">
          <div className="flex text-5xl font-semibold px-4">12:04:05 </div>
          <div className="flex text-2xl p-4">Tuesday, 19 May 2024 </div>
        </div>
        <div className="flex items-end text-slate-50 mt-auto pl-32 py-4">
          <div className="flex px-4 align-bottom">
            <div className="text-8xl font-semibold">32&deg;</div>
            <div className="text-6xl font-semibold">C</div>
          </div>
        </div>
      </div>
      <div className="ml-auto md:min-w-[400px] bg-black opacity-40 flex flex-col">
        <div className="flex justify-center">
          <TiWeatherWindyCloudy className="size-32 p-1 pb-7 pt-5" />
        </div>
        <div className="flex justify-center text-white pb-5">
          <h1 className="text-5xl font-semibold text-center text-gray-300">
            <span className="text-white bg-black"> Haze</span>
          </h1>
        </div>
        <div className="divider w-full my-0 py-1 h-1 " />
        <form className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Enter Location..."
            className="w-full p-4 border-none input input-bordered h-10 bg-inherit px-8 text-xl placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
          />
          <button
            type="submit"
            className="btn btn-circle bg-black bg-opacity-20 text-white flex items-center justify-center outline-none"
          >
            <FaSearch className="size-6 outline-none" />
          </button>
        </form>
        <div className="divider w-full my-0 py-1 h-1 " />
        <div className="flex justify-center text-white p-4">
          <h1 className="text-3xl text-center text-gray-300">
            <span className="text-gray-300"> Delhi, India</span>
          </h1>
        </div>
        <div className="mt-auto py-5">
          <div className="flex justify-between text-white px-8">
            <h1 className="text-xl text-center text-gray-300">
              <span className="text-gray-300">Temperature</span>
            </h1>
            <h1 className="text-xl text-center text-gray-300">
              <span className="text-gray-300">Temperature</span>
            </h1>
          </div>
          <div className="divider w-full my-0 py-1 h-1 " />

          <div className="flex justify-between text-white px-8">
            <h1 className="text-xl text-center text-gray-300">
              <span className="text-gray-300">Humidity</span>
            </h1>
            <h1 className="text-xl text-center text-gray-300">
              <span className="text-gray-300">Humidity</span>
            </h1>
          </div>
          <div className="divider w-full my-0 py-1 h-1 " />

          <div className="flex justify-between text-white px-8">
            <h1 className="text-xl text-center text-gray-300">
              <span className="text-gray-300">Visibility</span>
            </h1>
            <h1 className="text-xl text-center text-gray-300">
              <span className="text-gray-300">Visibility</span>
            </h1>
          </div>
          <div className="divider w-full my-0 py-1 h-1 " />

          <div className="flex justify-between text-white px-8">
            <h1 className="text-xl text-center text-gray-300">
              <span className="text-gray-300">WindSpeed</span>
            </h1>
            <h1 className="text-xl text-center text-gray-300">
              <span className="text-gray-300">WindSpeed</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
