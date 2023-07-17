 ;

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  
  return (
    <>
     <div >
      <Link href={"/admin"}>
      <h1 className="p-5 bg-rose-300 cursor-pointer text-center">
      Go Back To Dashboard

      </h1>
      </Link>
     </div>
    </>
  );
}
