export type Problem = {
    id : string;
    title : string;
    problemStatement : string;
    examples : Example[];
    order : number;
    constraints: string;
    starterCode : string;
    handlerFunction :((fn: any) => boolean) | string;
    starterFunctionName : string;
};
export type Example = {
    id : number;
    inputText : string;
    outputText : string;
    explanation? : string;
    img?:string;
}

export type ProblemDB = {
    id:string,
    title:string,
    category:string,
    difficulty:string,
    order:number,
    likes:number,
    dislikes:number,
    videoId?:string,
    link?:string,
}

