import { problems } from "@/mockProblems/problems";
import Link from "next/link";
import React, { useState } from "react";
import { BsCheckCircle, BsYoutube } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import YouTube from "react-youtube";
type ProblemsTableProps = {};

const ProblemsTable: React.FC<ProblemsTableProps> = () => {
  const [youtubePlayer, setYoutubePlayer] = useState({
    isOpen: false,
    videoId: "",
  });

  return (
    <>
      <tbody className="text-white">
        {problems.map((problem, idx) => {
          const difficultyColor =
            problem.difficulty == "Easy"
              ? "text-dark-green-s"
              : problem.difficulty == "Medium"
              ? "text-dark-yellow"
              : "text-dark-pink";
          return (
            <tr
              className={`${idx % 2 == 1 ? "bg-dark-layer-1" : ""}`}
              key={idx}
            >
              <th className="px-2 py-4 font-medium whitespace-nowrap text-dark-green-s">
                <BsCheckCircle width={18} fontSize={18} />
              </th>
              <th className="px-2 py-4 font-medium whitespace-nowrap">
                {problem.order}.
                <Link href={`/problems/${problem.id}`}>{problem.title}</Link>
              </th>
              <th className="px-2 py-4 font-medium whitespace-nowrap">
                {problem.difficulty}
              </th>
              <th
                className={`px-2 py-4 font-medium whitespace-nowrap ${difficultyColor}`}
              >
                {problem.category}
              </th>
              <th className="px-2 py-4 font-medium whitespace-nowrap cursor-pointer hover:text-red-600">
                {problem.videoId ? (
                  <BsYoutube
                    width={28}
                    fontSize={25}
                    onClick={() => {
                      setYoutubePlayer({
                        isOpen: true,
                        videoId: problem.videoId as string,
                      });
                    }}
                  />
                ) : (
                  <span className="text-gray-500 cursor-not-allowed">
                    Comming Soon
                  </span>
                )}
              </th>
            </tr>
          );
        })}
      </tbody>
      {youtubePlayer.isOpen ? (
        <tfoot className="fixed top-0 left-0 h-screen w-screen flex text-center justify-center">
          <div className="bg-black z-10  opacity-70 top-0 left-0 w-screen h-screen absolute"></div>
          <div className="w-full z-50 h-full px-6 relative mx-w-4xl">
            <div className="w-full h-full flex items-center justify-center relative">
              <div className="w-full relative">
                <IoClose
                  fontSize={35}
                  className="cursor-pointer absolute -top-16 right-0 "
                  onClick={() => {
                    setYoutubePlayer({ isOpen: false, videoId: "" });
                  }}
                ></IoClose>
                <YouTube
                  videoId={youtubePlayer.videoId}
                  loading="lazy"
                  iframeClassName="w-full min-h-[500px] "
                />
              </div>
            </div>
          </div>
        </tfoot>
      ) : (
        ""
      )}
    </>
  );
};
export default ProblemsTable;
