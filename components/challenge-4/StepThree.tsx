import Image from "next/image";
import React from "react";

function StepThree({
  active,
  nextStep,
  previousStep,
}: {
  active: number;
  nextStep: () => void;
  previousStep: () => void;
}) {
  return (
    <div className="flex flex-col w-[450px] p-12">
      <h1 className="text-2xl text-blue-950 font-bold">Pick add-ons</h1>
      <span className="text-xs text-gray-500 font-light">
        Add-ons help enhace your gaming experience
      </span>

      <div className="cursor-pointer flex items-center rounded-md border border-purple-700 px-6 py-2 mt-5">
        <input type="checkbox" name="add1" />
        <div className="ml-5">
          <div className="text-blue-950 font-bold text-sm flex flex-col">
            Online service
            <span className="text-xs text-gray-500 font-light">
              Access to mulitplayer games
            </span>
          </div>
        </div>
        <div className="ml-auto text-xs text-purple-700">+51/mo</div>
      </div>
      <div className="cursor-pointer flex items-center rounded-md border border-purple-700 px-6 py-2 mt-3">
        <input type="checkbox" name="add1" />
        <div className="ml-5">
          <div className="text-blue-950 font-bold text-sm flex flex-col">
            Large storage
            <span className="text-xs text-gray-500 font-light">
              Extra 1TB of cloud save
            </span>
          </div>
        </div>
        <div className="ml-auto text-xs text-purple-700">+52/mo</div>
      </div>
      <div className="cursor-pointer flex items-center rounded-md border  px-6 py-2 mt-3">
        <input type="checkbox" name="add1" />
        <div className="ml-5">
          <div className="text-blue-950 font-bold text-sm flex flex-col">
            Customizable Profile
            <span className="text-xs text-gray-500 font-light">
              Custom theme on your profile
            </span>
          </div>
        </div>
        <div className="ml-auto text-xs text-purple-700">+52/mo</div>
      </div>
      <div className="flex items-center justify-between mt-auto">
        <button
          onClick={() => previousStep()}
          className=" text-blue-950 rounded-md px-4 py-2 text-sm w-fit"
        >
          Go Back
        </button>
        <button
          onClick={() => nextStep()}
          className="bg-blue-950 text-white rounded-md px-4 py-2 text-sm w-fit"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default StepThree;
