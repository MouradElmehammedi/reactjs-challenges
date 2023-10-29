"use client";

import React, { useState } from "react";
import StepOne from "../../../components/challenge-4/StepOne";
import StepTwo from "../../../components/challenge-4/StepTwo";
import StepThree from "../../../components/challenge-4/StepThree";
import StepFour from "../../../components/challenge-4/StepFour";
import Greetings from "../../../components/challenge-4/Greetings";

function Page() {
  const [active, setActive] = useState<number>(1);

  const nextStep = () => {
    setActive((prevActive) => prevActive + 1);
  };

  const previousStep = () => {
    setActive((prevActive) => prevActive - 1);
  };

  return (
    <div className="bg-[#bfe2fd] flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg flex p-5">
        <div className="challenge_4_sidebar w-[265px] h-[450px] rounded-lg p-8">
          <div className="flex items-center gap-3">
            <div
              className={`rounded-full py-2.5 px-4 h-fit text-sm font-bold text-center flex items-center w-fit ${
                active === 1
                  ? "bg-blue-300 text-blue-950"
                  : "border-2 text-white "
              }`}
            >
              1
            </div>
            <div className="uppercase">
              <span className="text-xs text-gray-300">step 1</span>
              <div className="text-white text-sm font-bold">Your info</div>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-5">
            <div
              className={`rounded-full py-2.5 px-4 h-fit text-sm font-bold text-center flex items-center w-fit ${
                active === 2
                  ? "bg-blue-300 text-blue-950"
                  : "border-2 text-white "
              }`}
            >
              2
            </div>
            <div className="uppercase">
              <span className="text-xs text-gray-300">step 2</span>
              <div className="text-white text-sm font-bold">select plan</div>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-5">
            <div
              className={`rounded-full py-2.5 px-4 h-fit text-sm font-bold text-center flex items-center w-fit ${
                active === 3
                  ? "bg-blue-300 text-blue-950"
                  : "border-2 text-white "
              }`}
            >
              3
            </div>
            <div className="uppercase">
              <span className="text-xs text-gray-300">step 3</span>
              <div className="text-white text-sm font-bold">add-ons</div>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-5">
            <div
              className={`rounded-full py-2.5 px-4 h-fit text-sm font-bold text-center flex items-center w-fit ${
                active === 4
                  ? "bg-blue-300 text-blue-950"
                  : "border-2 text-white "
              }`}
            >
              4
            </div>
            <div className="uppercase">
              <span className="text-xs text-gray-300">step 4</span>
              <div className="text-white text-sm font-bold">summary</div>
            </div>
          </div>
        </div>
        {active === 1 && <StepOne active={active} nextStep={nextStep} />}
        {active === 2 && (
          <StepTwo
            active={active}
            nextStep={nextStep}
            previousStep={previousStep}
          />
        )}
        {active === 3 && (
          <StepThree
            active={active}
            nextStep={nextStep}
            previousStep={previousStep}
          />
        )}
        {active === 4 && (
          <StepFour
            active={active}
            nextStep={nextStep}
            previousStep={previousStep}
          />
        )}
        {active === 5 && <Greetings />}
      </div>
    </div>
  );
}

export default Page;
