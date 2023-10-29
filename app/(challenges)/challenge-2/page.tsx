function page() {
  return (
    <main className="flex min-h-screen md:items-center justify-center bg-gray-100">
      <div className="md:flex md:w-[600px] overflow-hidden bg-white md:rounded-[25px]">
        <div className="bg-light-slate-blue p-8 md:w-[50%] rounded-b-[25px] md:rounded-[25px]">
          <h1 className="text-gray-300 font-bold text-center mb-5">Your Result</h1>
          <div className="flex flex-col mx-auto rounded-full bg-gradients-light-slate-blue-bg w-fit px-10 py-8 text-center">
            <span className="text-white text-5xl font-bold">76</span>
            <span className="text-gray-300">of 100</span>
          </div>
          <h1 className="text-white text-2xl font-semibold text-center mt-5 mb-3">Great</h1>
          <p className="text-center text-gray-300 text-xs font-semibold">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="bg-white md:w-[50%] rounded-[25px] p-4 md:p-8">
          <h1 className="text-black text-lg font-semibold text-left mb-3">Summary</h1>
          <div className="bg-red-50 px-3 py-3 rounded-lg flex items-center justify-between mb-3">
            <span className="text-red-600 text-sm font-semibold">Reaction</span>
            <span className="text-xs text-gray-400 font-semibold"><strong className="text-black">80</strong> / 100</span>
          </div>
          <div className="bg-yellow-50 px-3 py-3 rounded-lg flex items-center justify-between mb-3">
            <span className="text-yellow-600 text-sm font-semibold">Memory</span>
            <span className="text-xs text-gray-400 font-semibold"><strong className="text-black">61</strong> / 100</span>
          </div>
          <div className="bg-green-50 px-3 py-3 rounded-lg flex items-center justify-between mb-3">
            <span className="text-green-600 text-sm font-semibold">Verbal</span>
            <span className="text-xs text-gray-400 font-semibold"><strong className="text-black">92</strong> / 100</span>
          </div>
          <div className="bg-purple-50 px-3 py-3 rounded-lg flex items-center justify-between mb-3">
            <span className="text-purple-600 text-sm font-semibold">Visual</span>
            <span className="text-xs text-gray-400 font-semibold"><strong className="text-black">71</strong> / 100</span>
          </div>
          <button className="rounded-full w-full py-3 bg-gradients-violet-blue-circle text-gray-200">
            Continue
          </button>
        </div>
      </div>
    </main>
  )
}

export default page