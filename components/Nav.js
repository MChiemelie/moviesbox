import Image from "next/image"

export default function Nav() {
  return (
     <nav className="flex absolute justify-between lg:justify-around mx-auto w-full p-[2%] text-xl items-center">
        <logo className="flex font-slimbold font-sans justify-center items-center gap-2 lg:gap-4">
           <Image width={100} height={100} src="/logo.png" alt="logo" className="w-8 lg:w-10" />
           <span className="font-bold text-sm lg:text-lg">MovieBox</span>
        </logo>
        <div className="hidden lg:block relative w-2/5">
           <input type="search" placeholder="What do you want to watch?" className="bg-transparent rounded-lg p-2 w-full border-2 border-white placeholder:text-white text-xs appearance-none outline-none focus:none focus:border-gray-300" />
           <div className="absolute inset-y-0 right-3 top-1 flex items-center pointer-events-none">
              <svg
                 className="w-4" viewBox="0 0 20 20" fill="currentColor">
                 <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                 />
              </svg>
           </div>
        </div>
        <div className="flex font-slimbold font-sans justify-center items-center lg:gap-8 gap-2">
           <span className="text-xs lg:text-sm">Sign In</span>
           <button className="bg-red-600 p-1 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
           </button>
        </div>
     </nav>
  )
}
