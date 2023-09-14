import Image from "next/image";

export default function Details() {
   return (
      <nav className="w-1/5 py-4 space-y-8 border-2 rounded-r-lg h-screen">
         <div className="flex font-slimbold font-sans justify-center items-center gap-3">
            <Image width={20} height={20} src="/logo.png" alt="logo" className="w-8" />
            <span className="font-bold text-2xl">MovieBox</span>
         </div>
         <ul className="">
            <li className="flex items-center justify- gap-3 px-10 py-3 text-sm">
               <Image width={20} height={20} src="/home.png" alt="Home" />
               Home
            </li>
            <li className="flex items-center justify- gap-3 px-10 py-3 text-sm bg-pink-200 border-r-4 border-pink-600">
               <Image width={20} height={20} src="/movie.png" alt="movie" />
               Movies
            </li>
            <li className="flex items-center justify- gap-3 px-10 py-3 text-sm">
               <Image width={20} height={20} src="/tv.png" alt="tv" />
               TV Series
            </li>
            <li className="flex items-center justify- gap-3 px-10 py-3 text-sm">
               <Image width={20} height={20} src="/time.png" alt="time" />
               Upcoming
            </li>
         </ul>
         <div className="bg-pink-50 mx-auto p-4 space-y-2 border-2 border-pink-200 border-1 rounded-2xl w-fit text-sm">
            <p className="font-bold">Play movie quizzes <br /> and earn <br /> free tickets</p>
            <p className="text-sm">50k people are playing now</p>
            <button className="w-fit bg-pink-200 rounded-full p-2 text-pink-600 font-bold px-2">Start playing</button>
         </div>
         <div className="flex items-center justify- gap-3 px-10 py-3 text-sm">
            <Image width={20} height={20} src="/logout.png" alt="logout" /> Log out
         </div>
      </nav>
   );
}