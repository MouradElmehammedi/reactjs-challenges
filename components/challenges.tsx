import Link from "next/link";
import Image from "next/image";
import { challengesData } from "../app/data";

function Challenges() {
  return (
    <div className="mx-auto p-10 border-t">
      {challengesData &&
        challengesData.map((challenge, index) => (
          <Link
            key={index}
            href={challenge.href}
            className="flex flex-col md:flex-row mb-5 gap-10 px-6 py-4 mx-auto border rounded-lg overflow-hidden text-left cursor-pointer"
          >
            <Image
              src={challenge.image as string}
              alt="image"
              width={400}
              height={100}
              className="shadow-lg"
            />
            <div className="">
              <div className="text-lg mb-4">{challenge.name}</div>
              <p
                className="text-gray-700 text-xs font-light text-left"
                dangerouslySetInnerHTML={{ __html: challenge.description }}
              />
            </div>
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
