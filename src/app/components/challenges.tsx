import Link from "next/link";
import Image from "next/image";
import { challengesData } from "../data";

function Challenges() {
  return (
    <div className="grid md:grid-cols-3 px-12 gap-3 mx-auto pt-10 border-t">
      {challengesData &&
        challengesData.map((challenge, index) => (
          <Link
            key={index}
            href={challenge.href}
            className="px-6 py-4 mx-auto border rounded-lg overflow-hidden shadow-xl text-left"
          >
            <div className="">
              <div className="text-lg mb-4">{challenge.name}</div>
              <p
                className="text-gray-700 text-xs font-light text-left"
                dangerouslySetInnerHTML={{ __html: challenge.description }}
              />
            </div>
            <Image
              src={challenge.image as string}
              alt="image"
              width={1000}
              height={1000}
              className="mt-4 shadow-lg w-[540px] h-[350px]"
            />
          </Link>
        ))}
    </div>
  );
}

export default Challenges;

{
  /* <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div> */
}
