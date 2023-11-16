"use client";

import { useEffect, useState, Suspense } from 'react';
import { Card, CardSkeleton, GridSkeleton } from '@/components';

export default function Featured() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=84d2cfd8fd13eb27e7362fd6a35db3a3`
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div className="container mx-auto w-full max-w-[90%] py-4">
      <div className="flex items-center justify-between py-4">
        <h2 className="font-extrabold text-xl sm:text-2xl lg:text-3xl">Featured Movies</h2>
        <span className="text-red-600 flex items-center text-sm">
          See more
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
            <path
              d="M7.5 4.66668L13.3333 10.5L7.5 16.3333"
              stroke="#B91C1C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      <div>
        {loading ? <GridSkeleton /> : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
            {movies.map((movie) => (
              <Suspense key={movie.id} fallback={<CardSkeleton />}>
                <Card key={movie.id} movie={movie} />
              </Suspense>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}