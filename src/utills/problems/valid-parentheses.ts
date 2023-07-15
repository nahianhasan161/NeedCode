import assert from "assert";
import { toast } from "react-toastify";
import { Problem } from "./types/problem";


    const starterCodeValidParentheses = `function validParentheses(s){
        //write your code here
    }`
    const ValidParentheseshandler = (fn:any) =>{
        try {
            const tests = 
                ["{}","{}[]{}","{]","([)]","{[]}"];
            
            const answers = [ true,true,false,false,true];
            for(let i = 0;i<tests.length;i++){
                const result = fn(tests[i]);
                assert.deepStrictEqual(result,answers[i]);
            }
            return true;
        } catch (error:any) {
            toast.error("Valid Parentheses handler function error")
            throw new Error(error);
        }
    }
export const validParentheses : Problem ={
    id : "valid-parentheses",
    title : "4.Valid Parentheses",
    problemStatement : ` <p class="mt-3">
    Given a String <code>s</code> containing just the characters <code>"("</code>,<code>")"</code> <code>"{"</code><code>"}"</code><code>"["</code><code>"]"</code>,determine if the input string is valid. </p> 
    <p class="mt-3">An input string is valid if:</p>
    <ul>
    <li class="mt-2">Open brackets must be closed by same type of brackets</li>
    <li class="mt-2">Open brackets must be closed in the correct order.</li>
    <li class="mt-2">Every close bracket has a coresponding open bracket of the same type.</li>
    </ul>
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
<code>s</code> Consist of parentheses only <code class="text-md">'(){}[]'</code>.
</li>
<li class='mt-2 text-sm'>
<strong>Only one valid answer exists.</strong>
</li>`,
    order : 4,
    starterCode : starterCodeValidParentheses,
    handlerFunction : ValidParentheseshandler ,
    starterFunctionName: "function validParentheses(",
}