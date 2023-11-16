import Image from "next/image";

export default function Sidebar() {
   return (
      <nav className="hidden lg:block w-1/4 lg:w-1/6  py-4 space-y-8 border-2 rounded-r-[20px] h-screen">
         <div className="flex font-slimbold font-sans justify-center items-center gap-3 py-4 px-8 mx-4">
            <Image width={100} height={100} src="/logo.png" alt="logo" className="w-8" />
            <span className="font-bold text-sm sm:text-lg lg:text-xl">MovieBox</span>
         </div>
         <ul className="">
            <li className="flex items-center justify- gap-3 px-10 py-6 text-xs md:text-sm">
               <Image width={100} height={100} src="/home.png" alt="Home" className="w-6" />
               Home
            </li>
            <li className="flex items-center justify- gap-3 px-10 py-6 text-xs md:text-sm bg-pink-200 border-r-4 border-pink-600">
               <Image width={100} height={100} src="/movie.png" alt="movie" className="w-6" />
               Movies
            </li>
            <li className="flex items-center justify- gap-3 px-10 py-6 text-xs md:text-sm">
               <Image width={100} height={100} src="/tv.png" alt="tv" className="w-6" />
               TV Series
            </li>
            <li className="flex items-center justify- gap-3 px-10 py-3 text-xs md:text-sm">
               <Image width={100} height={100} src="/time.png" alt="time" className="w-6" />
               Upcoming
            </li>
         </ul>
         <div className="bg-pink-50 p-4 space-y-2 border-2 border-pink-200 border-1 rounded-2xl w-fit mx-4 text-xs md:text-sm">
            <p className="font-bold">Play movie quizzes <br /> and earn <br /> free tickets</p>
            <p className="text-sm">50k people are playing now</p>
            <button className="w-fit bg-pink-200 rounded-full p-2 text-pink-600 font-bold px-2">Start playing</button>
         </div>
         <div className="flex items-center justify- gap-3 px-10 py-3 text-xs md:text-sm">
            <Image width={100} height={100} src="/logout.png" alt="logout" className="w-6" /> Log out
         </div>
      </nav>
   );
}