'use client'

import Image from "next/image";
import { useState } from "react";

function page() {
  const [holderName, setHolderName] = useState('');
  const [cardNumber, setcardNumber] = useState('');
  const [cvc, setCvc] = useState('');
  const [cardMonth, setCardMonth] = useState('');
  const [cardYear, setCardYear] = useState('');

  return (
    <main className="flex min-h-screen justify-between">
      <div className="relative side-menu min-h-screen w-[700px]">
        <div className="card-front text-white p-6 flex flex-col justify-between">
          <Image src="/card-logo.svg" alt='card-logo' width={60} height={60} />
          <div>
            <div className="text-2xl w-full font-mono">{cardNumber ? cardNumber : '0000 0000 0000 0000'}</div>
            <div className="flex items-center justify-between mt-2 text-xs">
              <span>{holderName ? holderName : 'Full Name'}</span>
              <div><span>{cardMonth ? cardMonth : 'MM'}</span>/<span>{cardYear ? cardYear : 'YY'}</span></div>
            </div>
          </div>
        </div>
        <div className="card-back text-white relative">
          <div className="absolute right-10 top-20">{cvc ? cvc : '123'}</div>
        </div>
      </div>
      <div className="min-h-screen bg-white w-full text-center flex items-center">
        <form className="w-80 m-auto">
          <div className="flex flex-col text-start mb-4">
            <label htmlFor="name" className="text-xs py-1 font-mono font-semibold text-purple-950">CARDHOLDER NAME</label>
            <input className="input" name="name" id="name" value={holderName} placeholder="e.g. Jane Appleseed" onChange={(e) => setHolderName(e.target.value)} />
          </div>
          <div className="flex flex-col text-start mb-4">
            <label htmlFor="number" className="text-xs py-1 font-mono font-semibold text-purple-950">CARD NUMBER</label>
            <input className="input" name="number" id="number" value={cardNumber} placeholder="e.g. 1234 5678 9123 0000" onChange={(e) => setcardNumber(e.target.value)} />
          </div>
          <div className="flex gap-5 w-full">
            <div className="flex flex-col text-start mb-4  w-[50%]">
              <label className="text-xs py-1 font-mono font-semibold text-purple-950">EXP. DATE(MM/YY)</label>
              <div className="flex gap-3">
                <input type="number" max={99} className="input w-[50%]" name="mm" id="mm" value={cardMonth} placeholder="MM" onChange={(e) => setCardMonth(e.target.value)} />
                <input type="number" max={99} className="input w-[50%]" name="yy" id="yy" value={cardYear} placeholder="YY" onChange={(e) => setCardYear(e.target.value)} />
              </div>
            </div>
            <div className="flex flex-col text-start mb-4 w-[50%]">
              <label htmlFor="number" className="text-xs py-1 font-mono font-semibold text-purple-950">CVC</label>
              <input type="number" max={999} className="input" name="number" id="number" value={cvc} placeholder="e.g. 123" onChange={(e) => setCvc(e.target.value)} />
            </div>
          </div>
          <button className="rounded-md bg-purple-950 text-white w-full mt-2 p-2 text-xs">Confirm</button>
        </form>
      </div>
    </main>
  )
}

export default page