import React,{useState,useEffect} from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { TiStarOutline } from "react-icons/ti";
import { Problem, ProblemDB } from "@/utills/problems/types/problem";
import Image from "next/image";
import { firestore } from "@/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
type ProblemDescriptionProps = {
  problem :Problem
};

const ProblemDescription: React.FC<ProblemDescriptionProps> = ({problem}) => {
  const {currentProblem,loading,difficultyClass} = useGetProblem(problem.id);

  return (
    <div className="bg-dark-layer-1">
      {/* TAB */}
      <div className="bg-dark-layer-2 flex items-center text-white h-11 w-full pt-2 overflow-x-hidden">
        <div className="bg-dark-layer-1 cursor-pointer text-xs py-[10px] px-5 rounded-t-[5px]">
          Description
        </div>
      </div>

      <div className="flex px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto">
        {/* Problem Heading */}
        <div className="w-full">
          <div className="flex space-x-4">
            <div className="flex-1 mr-2 text-lg text-white font-medium">
              {problem.title}
            </div>
          </div>
          {currentProblem && !loading && (

<div className="flex items-center mt-3">
<div className={` inline-block rounded-[23px] bg-opacity-[.15] px-2.5 py-1 text-sx font-medium capitalize ${difficultyClass}`}>
  {currentProblem.difficulty}
 
</div>
<div className="rounded p-[3px] ml-4 text-lg transition-colors duration-200  text-dark-green-s">
  <BsCheck2Circle />
</div>
<div className="flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-dark-gray-6">
  <AiFillLike />
  <span className="text-xs">{currentProblem.likes}</span>
</div>
<div className="flex items-center  cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-dark-gray-6">
  <AiFillDislike />
  <span className="text-xs">{currentProblem.dislikes}</span>
</div>
<div className="ml-4 text-xl cursor-pointer hover:bg-dark-fill-3 rounded p-[3px] transition-colors duration-200 text-dark-gray-6">
  <TiStarOutline />
</div>
</div>
          )}
         
          {/* Problem Statement[Paragraph] */}
          <div className="text-white text-sm">
          <div dangerouslySetInnerHTML={
            {__html:problem.problemStatement}
          }></div>
        
            
          </div>
          {/* Examples */}
          <div className="mt-4">
            {problem.examples.map((example,index)=>(
              <div key={example.id}>

              <p className="font-medium text-white">Example {index+1}:</p>
              {example.img&&(
                <Image src={example.img}  alt="example-image" className="mt-1 " width={500} height={100} />
              )}
              <div className="example-card">
                <pre>
                  <strong className="text-white">Input:</strong>{example.inputText}
                  <br />
                  <strong>Output:</strong>{example.outputText} <br />

                  {example.explanation && (
                  <>
                  <strong>Explanation:</strong> {example.explanation} 
                  </>
                  )
}
                </pre>
              </div>
              </div>
            ))}
            
          </div>
          {/*End of Examples  */}


          
          {/* Constraints */}
          <div className="my-5 pb-4">
            <div className="text-white text-sm font-medium">Constraints:</div>
            <ul className="text-white ml-5 list-disc ">
              <div dangerouslySetInnerHTML={{__html : problem.constraints}} />

            
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProblemDescription;

function useGetProblem(problemId:string){
  const [currentProblem, setCurrentProblem] = useState<ProblemDB|null>(null);
  const [loading, setLoading] = useState(false);
  const [difficultyClass, setDifficultyClass] = useState("");
  useEffect(() => {
    const  getProblem = async ()=>{
      setLoading(true);
      const docRef = doc(firestore, "problems", problemId );
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
       const problem = docSnap.data();
       setCurrentProblem({id:docSnap.id, ...problem} as ProblemDB)
        setDifficultyClass(
         problem.difficulty == "Easy" ? "bg-olive text-olive" :problem.difficulty == "Medium" ? "bg-dark-yellow text-dark-yellow": "bg-dark-pink text-dark-pink"
        );
          console.log(problem)
      } else {
        // docSnap.data() will be undefined in this case
        
        console.log("No such document!");
      }
      
      console.log("problemID:",problemId);
      setLoading(false);
    }
      getProblem();
  }, [problemId])
  return {currentProblem,loading,difficultyClass}
}