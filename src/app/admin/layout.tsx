;
import { RecoilRoot } from "recoil";

import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "@/components/Admin/Nav/NavBar";
import LeftBar from "@/components/Admin/LeftBar/LeftBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NeadCode",
  description: "coding problem and solving site with tutorials",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        
    <html lang="en">
        
      <body className={inter.className}>
      <main className=" min-h-screen w-fit md:w-auto">
        <div>
            <NavBar />
        </div>
        <div className='flex flex-wrap'>
            
                
    
                <LeftBar />
           
            <div className="w-full basis-2/3 flex-grow bg-[#F2F8FF] " >
           {children}

           

            </div>
        </div>
        </main>
      </body>
    </html>
    </>
  );
}
