import React from "react";

function StepOne({
  active,
  nextStep,
}: {
  active: number;
  nextStep: (active: number) => void;
}) {
  return (
    <div className="flex flex-col w-[450px] p-12">
      <h1 className="text-2xl text-blue-950 font-bold">Personal info</h1>
      <span className="text-xs text-gray-500 font-light">
        Please provide your name, email address, and phone number.
      </span>
      <div className="flex flex-col text-left items-start mt-6">
        <label className="text-xs text-blue-950">Name</label>
        <input
          className="border px-4 py-2 w-full rounded-md mt-1 outline-none text-sm"
          placeholder="e.g. Stephen King"
        />
      </div>
      <div className="flex flex-col text-left items-start mt-4">
        <label className="text-xs text-blue-950">Email Address</label>
        <input
          className="border px-4 py-2 w-full rounded-md mt-1 outline-none text-sm"
          placeholder="e.g. stephenking@lorem.com"
        />
      </div>
      <div className="flex flex-col text-left items-start mt-4">
        <label className="text-xs text-blue-950">Phone Number</label>
        <input
          className="border px-4 py-2 w-full rounded-md mt-1 outline-none text-sm"
          placeholder="e.g. +1 234 567 890"
        />
      </div>
      <button
        onClick={() => nextStep(1)}
        className="bg-blue-950 text-white rounded-md px-4 py-2 text-sm mt-auto w-fit ml-auto"
      >
        Next Step
      </button>
    </div>
  );
}

export default StepOne;
