import Image from "next/image";
import DetailsSkeleton from "./DetailsSkeleton";

export default function Details({ movieData }) {
   if (!movieData) {
      return <DetailsSkeleton />;
   }

   return (
      <div className="w-full space-y-6 h-screen p-4">
         <Image
            width={100}
            height={100}
            src={`https://image.tmdb.org/t/p/w200${movieData.backdrop_path}`}
            alt="movie"
            className="flex mx-auto rounded-2xl w-full lg:h-1/2"
         />
         <div className="md:flex justify-between lg:space-x-3 space-y-4 lg:space-y-0">
            <div className="md:w-2/3 space-y-4">
               <div className="xl:flex justify-center items-center gap-4">
                  <p className="text-md lg:text-xl text-center lg:text-lef font-bold text-gray-800">
                     {movieData.title} • {movieData.release_date} • PG-13 • {movieData.runtime}m
                  </p>
                  <div className="text-sm lg:text-md flex justify-center items-center gap-1">
                     {movieData.genres.map((genre) => (
                        <span key={genre.id} className="gap-2 border border-pink-200 bg-pink-50 font-semibold text-pink-600 p-1 rounded-full">
                           {genre.name}
                        </span>
                     ))}
                  </div>
               </div>
               <div className="flex">
                  <p className="text-sm text-center lg:text-justify">{movieData.overview}</p>
               </div>
               <div>
                  <ul className="space-y-3 text-sm my-4">
                     <li>Director : <span className="text-pink-600 text-xs">?????????????????</span>  </li>
                     <li>Writers : <span className="text-pink-600 text-xs">?????????????????</span> </li>
                     <li>Stars : <span className="text-pink-600 text-xs">?????????????????</span> </li>
                  </ul>
                  <div className="flex border-2 rounded-lg mx-1">
                     <button className="bg-pink-700 p-2 rounded-lg w-1/3 text-white text-xs w-1/3">
                        Top rated movie ? #
                     </button>
                     <button className="flex py-2 rounded-lg text-sm w-2/3 px-8 items-center justify-between gap-2">
                        <span>Awards ? nominations</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                     </button>
                  </div>
               </div>
            </div>
            <div className="md:w-1/3 space-y-1">
               <div className="flex items-center justify-center lg:justify-end">
                  <Image width={100} height={100} src="/star.png" alt="" className="w-4" />
                  <p className="text-xs">
                     <span className="text-gray-300">
                        {movieData.vote_average.toFixed(1)}
                     </span>{" "}
                     | <span className="text-gray-500">{movieData.vote_count}k</span>
                  </p>
               </div>
               <div className="space-y-2">
                  <button className="flex w-full bg-pink-700 text-white items-center text-xs justify-center gap-4 py-2 rounded-lg">
                     <Image src="/tickets.png" alt="ticket" width={100} height={100} className="w-4" />
                     See Showtimes
                  </button>
                  <button className="flex w-full bg-pink-50 text-gray-800 items-center text-xs justify-center gap-4 py-2 rounded-lg border border-pink-500">
                     <Image src="/list.png" alt="list" width={100} height={100} className="w-4" />
                     More watch options
                  </button>
               </div>
               <div className="relative">
                  <Image width={100} height={100} src="/best.png" alt="" className="rounded-t-lg h-5/6 w-full" />
                  <button className="absolute bottom-0 text-white flex w-full items-center text-xs justify-center gap-1 py-2 bg-opacity-25 bg-gray-400 bg-clip-padding backdrop-blur-md rounded-lg p-1 rounded-t-xl">
                     <Image src="/list.png" alt="list" width={100} height={100} className="w-4" />
                     The Best Movies and Shows in September
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}