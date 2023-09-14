import Image from "next/image";

export default function Details({ movieData }) {
   if (!movieData) {
      return <p className="flex h-screen w-full justify-center text-center items-center">Getting Movie Details..</p>;
   }

   const imageUrl = `https://image.tmdb.org/t/p/w200${movieData.backdrop_path}`;

   return (
      <div className="p-10 w-4/5">
         <Image
            width={150}
            height={150}
            src={imageUrl}
            alt=""
            className="flex mx-auto rounded-lg w-2/3"
         />
         <div className="flex justify-between gap-2 py-8">
            <div className="w-2/3 space-y-4">
               <div>
                  <p className="text-md lg:text-xl font-bold text-gray-800" data-testid="movie-title">
                     {movieData.title} • {movieData.release_date} • PG-13 • {movieData.runtime}m
                  </p>
               </div>
               <div className="flex">
                  <p className="text-md" data-testid="movie-overview">
                     {movieData.overview}
                  </p>
               </div>
               <div>
                  <ul className="flex">
                     <li>Director : {movieData.director}</li>
                     <li>Writers : {movieData.writer},</li>
                     <li>Stars : {movieData.stars},</li>
                  </ul>
                  <div className="flex border-2 gap-6 rounded-lg">
                     <button className="bg-pink-700 p-2 rounded-lg text-white text-sm">
                        Top rated movie #{movieData.topRatedRank}
                     </button>
                     <button>
                        Awards {movieData.awards} nominations
                     </button>
                     <Image src="/arrow.png" alt="arrow" width={15} height={5} />
                  </div>
               </div>
            </div>
            <div className="w-1/3 space-y-4">
               <div className="flex items-center justify-end">
                  <Image width={20} height={20} src="/star.png" alt="" />
                  <p className="text-sm">
                     <span className="text-gray-300" data-testid="movie-vote-average">
                        {movieData.vote_average.toFixed(1)}
                     </span>{" "}
                     | <span className="text-gray-500">{movieData.vote_count}k</span>
                  </p>
               </div>
               <div className="space-y-2">
                  <button className="flex w-full bg-pink-700 text-white items-center text-sm justify-center gap-4 py-2 rounded-lg">
                     <Image src="/tickets.png" alt="ticket" width={20} height={20} />
                     See Showtimes
                  </button>
                  <button className="flex w-full bg-pink-50 text-gray-800 items-center text-sm justify-center gap-4 py-2 rounded-lg border border-pink-500">
                     <Image src="/list.png" alt="list" width={20} height={20} />
                     More watch options
                  </button>
               </div>
               <div className="relative">
                  <Image width={100} height={100} src="/best.png" alt="" className="w-full rounded-lg" />
                  <button className="absolute bottom-0 text-white flex w-full items-center text-sm justify-center gap-1 py-2 bg-opacity-25 bg-gray-400 bg-clip-padding backdrop-blur-md rounded-lg p-1">
                     <Image src="/list.png" alt="list" width={20} height={20} />
                     The Best Movies and Shows in September
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}