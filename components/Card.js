"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Card({
   movie: { id, title, releaseDate, poster_path, original_language, vote_average, popularity },
}) {
   const imageUrl = `https://image.tmdb.org/t/p/w200${poster_path}`;
   const [clicked, setClicked] = useState(false);

   return (
      <div className="relative space-y-2" data-testid="movie-card">
         <Link href={`/movies/${id}`} key={id}>
            <Image width={150} height={150} src={imageUrl} alt="" className="mx-auto" />

            <p className="text-sm text-gray-500">
               {original_language}, <span data-testid="movie-release-date">{releaseDate}</span>
            </p>
            <p className="font-extrabold text-sm xl:text-md w-40" data-testid="movie-title">
               {title}
            </p>
            <div className="flex text-sm justify-between">
               <span className="flex gap-2">
                  <Image width={10} height={10} src="/imdb.png" alt="" className="" />
                  {vote_average}/10
               </span>
               <span className="flex gap-2">
                  <Image width={10} height={10} src="/orange.png" alt="" className="" />
                  {popularity}
               </span>
            </div>
         </Link>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className={`absolute top-0 right-0 m-3 bg-slate-400 hover:bg-slate-600 rounded-full p-1 transition-colors duration-300 ease-in-out cursor-pointer ${clicked && 'bg-red-300'}`}
            onClick={() => {
               setClicked(!clicked);
            }}
         >
            <path
               fillRule="evenodd"
               clipRule="evenodd"
               d="M3.17157 5.48284C4.73367 3.96185 7.26633 3.96185 8.82842 5.48284L9.99999 6.62359L11.1716 5.48284C12.7337 3.96185 15.2663 3.96185 16.8284 5.48284C18.3905 7.00383 18.3905 9.46984 16.8284 10.9908L9.99999 17.6396L3.17157 10.9908C1.60948 9.46984 1.60948 7.00383 3.17157 5.48284Z"
               fill="#FFF"
               className={clicked && 'bg-red-200 fill-red-600'}
               onClick={() => {
                  setClicked(!clicked);
               }}
            />
         </svg>
      </div>
   );
}
