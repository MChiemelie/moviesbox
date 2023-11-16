"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import clsx from 'clsx';


const genres = [
   {
      "id": 28,
      "name": "Action"
   },
   {
      "id": 12,
      "name": "Adventure"
   },
   {
      "id": 16,
      "name": "Animation"
   },
   {
      "id": 35,
      "name": "Comedy"
   },
   {
      "id": 80,
      "name": "Crime"
   },
   {
      "id": 99,
      "name": "Documentary"
   },
   {
      "id": 18,
      "name": "Drama"
   },
   {
      "id": 10751,
      "name": "Family"
   },
   {
      "id": 14,
      "name": "Fantasy"
   },
   {
      "id": 36,
      "name": "History"
   },
   {
      "id": 27,
      "name": "Horror"
   },
   {
      "id": 10402,
      "name": "Music"
   },
   {
      "id": 9648,
      "name": "Mystery"
   },
   {
      "id": 10749,
      "name": "Romance"
   },
   {
      "id": 878,
      "name": "Science Fiction"
   },
   {
      "id": 10770,
      "name": "TV Movie"
   },
   {
      "id": 53,
      "name": "Thriller"
   },
   {
      "id": 10752,
      "name": "War"
   },
   {
      "id": 37,
      "name": "Western"
   }
]

const getGenresByIds = (genreIds) => {
   return genreIds.map((genreId) => {
      const genre = genres.find((g) => g.id === genreId);
      return genre && genre.name;
   });
};

export default function Card({
   movie: { id, title, release_date, poster_path, original_language, vote_average, popularity, genre_ids },
}) {
   const imageUrl = `https://image.tmdb.org/t/p/w200${poster_path}`;
   const [clicked, setClicked] = useState(false);
   const movieGenres = getGenresByIds(genre_ids);

   return (
      <div className="relative space-y-4 w-fit h-full p-4 flex flex-col space-y-2 justify-between" data-testid="movie-card">
         <Link href={`/movies/${id}`} key={id} className="flex flex-col space-y-2 justify-between">
            <Image width={100} height={100} src={imageUrl} alt="" className="mx-auto w-fit" />
            <p className="text-gray-600 text-xs font-semibold">
               {original_language}, <span data-testid="movie-release-date">{release_date.substring(0, 4)}</span>
            </p>
            <p className="font-bold text-sm w-48" data-testid="movie-title">
               {title}
            </p>
            <div className="flex justify-between">
               <span className="flex gap-1 text-xs items-center">
                  <Image width={100} height={100} src="/imdb.png" alt="" className="w-8" />
                  {vote_average}/10
               </span>
               <span className="flex gap-2 text-xs items-center">
                  <Image width={100} height={100} src="/orange.png" alt="" className="w-3" />
                  {popularity}
               </span>
            </div>
            <div className="flex flex-wrap w-40 gap-2">
               {movieGenres.map((genre, index) => (
                  <span key={index} className="gap-4 text-gray-600 text-xs font-semibold rounded-2xl">
                     {genre}
                  </span>
               ))}
            </div>
         </Link>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className={clsx(
               'absolute top-4 right-4 m-3 bg-slate-400 hover:bg-slate-600 rounded-full p-1 transition-colors duration-300 ease-in-out cursor-pointer',
               clicked && 'bg-red-300'
            )}
            onClick={() => {
               setClicked(!clicked);
            }}
         >
            <path
               fillRule="evenodd"
               clipRule="evenodd"
               d="M3.17157 5.48284C4.73367 3.96185 7.26633 3.96185 8.82842 5.48284L9.99999 6.62359L11.1716 5.48284C12.7337 3.96185 15.2663 3.96185 16.8284 5.48284C18.3905 7.00383 18.3905 9.46984 16.8284 10.9908L9.99999 17.6396L3.17157 10.9908C1.60948 9.46984 1.60948 7.00383 3.17157 5.48284Z"
               fill="#FFF"
               className={clsx(clicked && 'bg-34-200 fill-red-600')}
               onClick={() => {
                  setClicked(!clicked);
               }}
            />
         </svg>
      </div>
   );
}
