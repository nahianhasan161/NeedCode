import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
export default function Home() {
  return (
    <>
      <div className="h-screen bg-gradiant-to-b bg-red-500">
        <div className="max-w-7xl">
          <Navbar></Navbar>
        </div>

        <Link href="/auth"> Login</Link>
      </div>
    </>
  );
}
