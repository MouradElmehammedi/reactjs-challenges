import Image from "next/image";
import React from "react";

function Greetings() {
  return (
    <div className="flex flex-col text-center flex-center justify-center w-[450px] p-12">
      <Image
        src="/challenges-resources/challenge-4_multistep_form/assets/images/icon-thank-you.svg"
        width={60}
        alt="arcade"
        height={60}
        className="mx-auto"
      />
      <h1 className="mt-5 mb-2 text-blue-950 text-xl font-semibold">
        Thank you
      </h1>
      <span className="text-gray-500 text-xs">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support. please feel free to email us at
        support@loremgaming.com.
      </span>
    </div>
  );
}

export default Greetings;
