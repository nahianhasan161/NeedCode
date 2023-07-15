 ;

import Topbar from "@/components/Topbar/Topbar";

import Workspace from "@/components/workspace/Workspace";
import { problems } from "@/utills/problems";
import { Problem } from "@/utills/problems/types/problem";
import { doc, getDoc } from "firebase/firestore";
import {useState,useEffect} from "react";

import {firestore} from "@/firebase/firebase"
type ProblemPageProps = {
  problem:Problem
}
export const dynamicParams = false

export async function generateStaticParams(){
  const paths = Object.keys(problems).map((key)=>{
   return {pid:key}
  })

  console.log(paths);
  return paths;
}
 function getProblem({params : {pid}}:{params:{pid:string}}){
  const problem = problems[pid];
  
  if(!problem){
    return {
      notFound : true
    }
  } else {
      return problem
  }
}
const page: React.FC<ProblemPageProps> = ({params : {pid}}:{params:{pid:string}}) => {
  console.log(pid)
  const problem = getProblem({params:{pid}});
  console.log("problemID from url:",pid)
  const currentProblem = useGetCurrentProblem(pid);
  return (
    <div >

      
      <Topbar problemPage />
      <Workspace problem={problem} />
      
    </div>
  );
};
export default page;

function useGetCurrentProblem(problemId:string){
  const [problem, setProblem] = useState("");
  const [loading,setLoading] = useState(false);
  useEffect(() => {
  const getCurrentProblem =async () => {
      setLoading(true);
    const  docQuery = doc(firestore,'problems',problemId);
    const docSnap = await getDoc(docQuery);
      if(docSnap.exists()){
        const problem = docSnap.data();
        console.log("Main Page:",problem);
      }else{
        console.log("no data found");
      }
      setLoading(false);
    }
    getCurrentProblem();
  }, [problemId])
 return problem;
}
//fetch the local data
//SSG
//getStaticPaths -> it create the dynamic rules
/* export const dynamicParams = false
export async function generateStaticParams(){
  const paths = Object.keys(problems).map((key)=>({
    params:{pid:key}
  }))
  return{pid:'1'}
    
  
}
 */



/* 
export async function getStaticProps(params:{params:{pid:string}}){
  const {pid} = params;
  const problem = problems[pid];

  if(!problem){
    return {
      notFound:true
    }
  }
    else {
      return {props:{
        problem
      }}
    }
} */