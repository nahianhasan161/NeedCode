import React,{useState} from "react";
import PreferenceNav from "../PreferenceNav/PreferenceNav";
import Split from "react-split";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import EditorFooter from "./EditorFooter";
import { Problem } from "@/utills/problems/types/problem";
type PlaygroundProps = {problem:Problem};

const Playground: React.FC<PlaygroundProps> = ({problem}) => {
  const [activeTestCaseId,setActiveTestCaseId] = useState<number>(0)
  return (
    <div className="relative flex flex-col overflow-x-hidden bg-dark-layer-1">
      <PreferenceNav />
      <Split
        className="h-[calc(100vh-94px)]"
        sizes={[60, 40]}
        direction="vertical"
        minSize={60}
      >
        
        {/* Official Solution */}
        <div className="w-full overflow-auto">
          <CodeMirror
            value={problem.starterCode}
            theme={vscodeDark}
            extensions={[javascript()]}
            style={{ fontSize: 16 }}
          />
        </div>
        {/* 
        <div className='w-full px-5 overflow-auto'>
					
					<div className='flex items-center h-10 space-x-6'>
						<div className='relative flex flex-col justify-center h-full cursor-pointer'>
							<div className='text-sm font-medium leading-5 text-white'>Testcases</div>
							<hr className='absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white' />
						</div>
					</div>

					<div className='flex'>
						
							<div
								className='items-start mt-2 mr-2 '
								
							>
								<div className='flex flex-wrap items-center gap-4'>
									<div
										className="relative inline-flex items-center px-4 py-1 font-medium text-white transition-all rounded-lg cursor-pointer focus:outline-none bg-dark-fill-3 hover:bg-dark-fill-2 whitespace-nowrap"
									
									>
										Case 1
									</div>
									<div
										className="relative inline-flex items-center px-4 py-1 font-medium text-white transition-all rounded-lg cursor-pointer focus:outline-none bg-dark-fill-3 hover:bg-dark-fill-2 whitespace-nowrap"
									
									>
										Case 2
									</div>
									<div
										className="relative inline-flex items-center px-4 py-1 font-medium text-white transition-all rounded-lg cursor-pointer focus:outline-none bg-dark-fill-3 hover:bg-dark-fill-2 whitespace-nowrap"
									
									>
										Case 3
									</div>
								</div>
							</div>
					
					</div>

					<div className='my-4 font-semibold'>
						<p className='mt-4 text-sm font-medium text-white'>Input:</p>
						<div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
							[1,2,3]
						</div>
						<p className='mt-4 text-sm font-medium text-white'>Output:</p>
						<div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
							[4,5,6]
						</div>
					</div>
				</div> */}
    {/* My Solution */}
      <div className="relative w-full h-10 ml-2 overflow-auto text-slate-200">
          <div className="w-[70px]">

          <div className=" text-sm font-medium cursor-pointer mt-2 border-b-[2px] border-spacing-b-10 pb-[8px]">

          Testcases
          </div>
          
          </div>
          <div className="relative flex gap-2 mt-5">
            {problem.examples.map((example,index)=>(
              
              <button key={example.id} onClick={()=>
                setActiveTestCaseId(index)
              }  className= {` bg-dark-fill-3 hover:bg-dark-fill-2 px-2.5 py-1 rounded-lg whitespace-nowrap cursor-pointer relative flex align-center justify-center ${activeTestCaseId == index ? "text-white" : "text-gray-500"} `} >Case {index+1}</button>
            ))}
          
            
          </div>
          <div className="mt-5">
            <p className="font-medium">

            Input :
            </p>
            <div className="example-card ">

            <pre>
              
              {problem.examples[activeTestCaseId].inputText}
            </pre>
            
            </div>
          </div>
          <div className="mt-5">
            <p className="font-medium">

            Output :
            </p>
            <div className="example-card ">

            <pre>
              
              {problem.examples[activeTestCaseId].outputText}
            </pre>

            </div>
          </div>
        </div>
      </Split>
      <EditorFooter />
    </div>
  );
};
export default Playground;
