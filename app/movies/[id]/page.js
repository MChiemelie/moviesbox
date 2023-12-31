"use client";

import { Sidebar, Details } from "@/components";
import { useState, useEffect } from "react";

export default function Page({ params }) {
  const [movieData, setMovieData] = useState(null);
  const movieId = params.id;

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const apiKey = process.env.API_KEY; // Replace with your API key
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=84d2cfd8fd13eb27e7362fd6a35db3a3`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setMovieData(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div className="flex">
      <Sidebar />
      <Details movieData={movieData} />
    </div>
  );
}