import Image from "next/image";
import React from "react";

type Props = {
  params: any;
};

export default async function MovieDetail({ params }: Props) {
  const { id } = params;
  const imagePath = "https://image.tmdb.org/t/p/original/";
  const key = process.env.NEXT_PUBLIC_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`;

  const data = await fetch(url);
  const res = await data.json();
  return (
    <div>
      <h2 className=" text-4xl">{res.title}</h2>
      <h2 className=" text-4xl"> Runtime: {res.runtime}</h2>
      <Image
        alt={res.title}
        src={imagePath + res.backdrop_path}
        width={800}
        height={800}
        className=" my-12 w-full"
        priority
      />
      <p>{res.overview}</p>
    </div>
  );
}
