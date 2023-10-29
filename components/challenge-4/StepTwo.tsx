import Image from "next/image";
import React from "react";

function StepTwo({
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
      <h1 className="text-2xl text-blue-950 font-bold">Select your plan</h1>
      <span className="text-xs text-gray-500 font-light">
        You have the option of monthly or yearly billing.
      </span>

      <div className="flex gap-3 items-center mt-5">
        <div className="w-32 p-4 border border-blue-900 rounded-md">
          <Image
            src="/challenges-resources/challenge-4_multistep_form/assets/images/icon-arcade.svg"
            width={30}
            alt="arcade"
            height={30}
          />
          <div>
            <h1 className="text-blue-900 font-bold text-sm mt-10">Arcade</h1>
            <span className="text-xs text-gray-500 font-light">$9/mo</span>
          </div>
        </div>
        <div className="w-32 p-4 border border-blue-900 rounded-md">
          <Image
            src="/challenges-resources/challenge-4_multistep_form/assets/images/icon-advanced.svg"
            width={30}
            alt="arcade"
            height={30}
          />
          <div>
            <h1 className="text-blue-900 font-bold text-sm mt-10">Advanced</h1>
            <span className="text-xs text-gray-500 font-light">$12/mo</span>
          </div>
        </div>
        <div className="w-32 p-4 border rounded-md">
          <Image
            src="/challenges-resources/challenge-4_multistep_form/assets/images/icon-pro.svg"
            width={30}
            alt="arcade"
            height={30}
          />
          <div>
            <h1 className="text-blue-900 font-bold text-sm mt-10">Pro</h1>
            <span className="text-xs text-gray-500 font-light">$15/mo</span>
          </div>
        </div>
      </div>
      <div className="my-5 flex gap-5 items-center justify-center">
        <div>
          <input type="radio" name="plan" id="monthly" />
          <label
            htmlFor="monthly"
            className=" text-blue-950 text-xs font-semibold w-fit ml-2"
          >
            Monthly
          </label>
        </div>
        <div>
          <input type="radio" id="yearly" name="plan" />
          <label
            htmlFor="yearly"
            className=" text-xs font-semibold text-gray-500 w-fit ml-2"
          >
            Yearly
          </label>
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
          Next Step
        </button>
      </div>
    </div>
  );
}

export default StepTwo;
