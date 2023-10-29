import Image from "next/image";
import React from "react";

function StepFour({
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
      <h1 className="text-2xl text-blue-950 font-bold">Finishing up</h1>
      <span className="text-xs text-gray-500 font-light">
        Double-check everything looks OK before confirming.
      </span>

      <div className="p-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-bold text-blue-950">
              Arcade (Monthly)
            </div>
            <a
              href="#"
              className="text-sm font-normal hover:text-purple-800 hover:underline"
            >
              Change
            </a>
          </div>
          <div className="ml-auto text-sm font-bold text-blue-950">$9/mo</div>
        </div>

        <div className="border-t my-3"></div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500 font-light">
            Online service
          </span>
          <span className="text-xs text-blue-950 font-light">+$1/mo</span>
        </div>
        <div className="flex items-center justify-between mt-3">
          <span className="text-xs text-gray-500 font-light">
            Larger storage
          </span>
          <span className="text-xs text-blue-950 font-light">+$2/mo</span>
        </div>
        <div className="flex items-center justify-between mt-6">
          <span className="text-xs text-gray-500 font-light">
            Total (per month)
          </span>
          <span className="text-md text-blue-800 font-bold">+$12/mo</span>
        </div>
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
          Confirm
        </button>
      </div>
    </div>
  );
}

export default StepFour;
