import assert from "assert";
import { toast } from "react-toastify";
import { Problem } from "./types/problem";
import example1 from "./images/search-a-2d-1.jpg"
import example2 from "./images/search-a-2d-2.jpg"

    const starterCodeSearch2DMatrix = `function validParentheses(s){
        //write your code here
    }`
    const search2DMatrixhandler = (fn:any) =>{
        try {
            const tests = 
                [{
                    matrix : [

                        [1,3,5,7],
                        [10,11,16,20],
                        [23,30,34,60],
                    ],
                    target : 3,
               },
                {
                    matrix : [

                        [1,1,5,2],
                        [10,11,16,20],
                        [23,30,34,60],
                    ],
                    target : 13,
               },
            
            ];
            
            const answers = [ true,false];
            for(let i = 0;i<tests.length;i++){
                const result = fn(tests[i].matrix, tests[i].target);
                assert.deepStrictEqual(result,answers[i]);
            }
            return true;
        } catch (error:any) {
            toast.error("Valid Parenthesis handler function error")
            throw new Error(error);
        }
    }
export const search2DMatrix : Problem ={
    id : "search-a-2d-matrix",
    title : "5.Search a 2D Matrix",
    problemStatement : ` <p class="mt-3">
    Write an efficient algorithm that searches for a value in a <code>m x n </code> matrix.this has the following properties:</p>
    </p>
    <ul>
    <li class="mt-2">Integers in each row are sorted from left to right</li>
    <li class="mt-2">The first integer of eatch row is greater than the last integers of the problem row</li>
    </ul>

     
    <p class="mt-3">Given <code>matrix</code>,an <code>m x n</code> matrix and <code>target</code>, return <code>true</code>, return <code>true</code>,if <code>Larget </code> is in the matrix, and <code>false</code>otherwise
    </p>
    
`,
    examples : [
    {
        id: 0,
        inputText : "s = '()'",
        outputText : "true",
        
    },
    {
        id: 1,
        inputText : "s = '()[]{}' ",
        outputText : "true",
        
        
    }
    ],
    constraints: `<li class='mt-2'>
  <code>1 ≤ s.length ≤ 10<sup>4</sup></code>
</li> <li class='mt-2'>
<code>-10 ≤ nums[i] ≤ 10</code>
</li> <li class='mt-2'>
<code>s</code> Consist of parenthesis only <code class="text-md">'(){}[]'</code>.
</li>
<li class='mt-2 text-sm'>
<strong>Only one valid answer exists.</strong>
</li>`,
    order : 5,
    starterCode : starterCodeSearch2DMatrix,
    handlerFunction : search2DMatrixhandler ,
    starterFunctionName: "search2DMatrix(",
}