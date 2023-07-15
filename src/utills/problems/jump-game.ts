import assert from "assert";
import { toast } from "react-toastify";
import { Problem } from "./types/problem";


    const starterCodeJumpGame = `function canJump(nums){
        //write your code here
    }`
    export const jumpGameHandler = (fn:any) =>{
        try {
            const tests = [
                [2,3,1,1,4],
                [3,2,1,0,4],
                [2,0,0],
                [2,5,0],
            ];
            /* const targets = [9,6,6]; */
            const answers = [true,false,true,true
            ];
            for(let i = 0;i<tests.length;i++){
                const result = fn(tests[i]);
                assert.deepStrictEqual(result,answers[i]);
            }
            return true;
        } catch (error:any) {
            toast.error("Jump Game handler function error")
            throw new Error(error);
        }
    }
export const jumpGame : Problem ={
    id : "jump-game",
    title : "3.Jump Game",
    problemStatement : ` <p class="mt-3">
    You are Given an intiger array  <code>nums</code>,You are initially positioned at the <strong>first index</strong>
    and each element in the array represents your maximum jump length at that position 
    </p>
    <p class="mt-3">
    Return <code>true</code> if you can reach the last index, or <code>false</code> otherwise
  </p>
  `,
    examples : [
    {
        id: 0,
        inputText : "nums = [2,3,1,1,4]",
        outputText : "true",
        explanation : "Jump 1 step from index 0 to 1, then 3 step to the last index",
    },
    {
        id: 1,
        inputText : "nums = [3,2,1,0,4]",
        outputText : "false",
        explanation : "You will always arrive at index 3 no matter what.It's maximum jump length is 0,which makes it impossible to reach the last index",
        
    }
    ],
    constraints: `<li class='mt-2'>
  <code>1 ≤ nums.length ≤ 10^4</code>
</li> <li class='mt-2'>
<code>0 ≤ nums[i] ≤ 10^5</code>
</li>`,
    order : 1,
    starterCode : starterCodeJumpGame,
    handlerFunction : jumpGameHandler ,
    starterFunctionName: "function canJump(",
}