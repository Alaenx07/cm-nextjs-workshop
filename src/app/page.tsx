import Image from "next/image";
import React from "react";
import Movie from "./movie";

type Props = {};

export default async function Home({}: Props) {
  const key = process.env.NEXT_PUBLIC_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}`;

  let res;

  try {
    const data = await fetch(url);
    res = await data.json();
  } catch (error) {
    console.error("Failed to fetch data:", error);
    res = { results: [] }; // Provide a default value in case of error
  }

  return (
    <div>
      <div className="grid gap-3 grid-cols-fluid">
        {res.results && res.results.length > 0 ? (
          res.results.map((movie: any) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
            />
          ))
        ) : (
          <p>No movies available.</p>
        )}
      </div>
    </div>
  );
}

// function delay(timeout: number) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, timeout);
//   });
// }
