"use client";
import ProblemDescription from "@/components/ProblemDescription/ProblemDescription";
import Topbar from "@/components/Topbar/Topbar";
import Playground from "@/components/workspace/Playground/Playground";

import Split from "react-split";
type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <div>
      <Topbar problemPage />

      <Split className="split" minSize={0}>
        <ProblemDescription />

        <Playground />
      </Split>
    </div>
  );
};
export default page;
