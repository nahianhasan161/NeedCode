 ;
import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import ProblemsTable from "@/components/problemsTable/problemsTable";
import Topbar from "@/components/Topbar/Topbar";
import LoadingSkeleton from "@/components/LoadingSkeleton/LoadingSkeleton";
export default function Home() {
  const [loadingProblems,setLoadingProblems] = useState(true);
  return (
    <>
      <main className="bg-dark-layer-2 min-h-screen">
        <Topbar />
        <h1
          className="text-2xl text-center text-gray-700 dark:text-gray-400 font-medium
      uppercase ml-10 mb-5
      "
        >
          
          &ldquo; Problems Table &rdquo;
        </h1>
        <div className="relative overflow-x-auto mx-auto px-6 pb-10">
          <div className="mt-3">
        <Link className="bg-rose-300 p-3 hover:bg-rose-400" href={"/problem/create"}>Create Problem</Link>

          </div>
          
          <table className="text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full  max-w-[1200px] mx-auto">
            <thead className="border-b">
              <tr>
                <th scope="col" className="px-1 py-3 w-0 font-medium">
                  Status
                </th>
                <th scope="col" className="px-1 py-3 w-0 font-medium">
                  Title
                </th>
                <th scope="col" className="px-1 py-3 w-0 font-medium">
                  Difficulty
                </th>
                <th scope="col" className="px-1 py-3 w-0 font-medium">
                  Category
                </th>
                <th scope="col" className="px-1 py-3 w-0 font-medium">
                  Solution
                </th>
              </tr>
            </thead>
          
            <ProblemsTable setLoadingProblems={setLoadingProblems} />
          </table>
          <div className="animate-pulse  mx-auto sm:w-7/12">
             

             {loadingProblems && [...Array(10)].map((_,index)=>
             <LoadingSkeleton key={index} />
             )
             /* loadingProblems && <LoadingSkeleton/> */
             
           }
           
             
         </div>
        </div>
      </main>
    </>
  );
}
