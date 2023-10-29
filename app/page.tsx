import Challenges from "../components/challenges";

export default function Home() {
  return (
    <div className="font-bold py-10 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>
          Welcome to my collection of <br />
          React challenges!
        </h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"></div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Feel free to explore my various projects and access them on my GitHub
        repository.
      </div>
      <Challenges />
    </div>
  );
}
