import { useState, useEffect } from "react";
import Searchbar from "../components/searchbar";
import Details from "../components/details";
import "./error-animation.css";

interface Movie {
  Title: string;
  Poster: string;
  Plot: string;
  Genre: string;
  Director: string;
  Actors: string;
  Language: string;
  Country: string;
  Awards: string;
  imdbRating: string;
  Metascore: string;
  Runtime: string;
  Released: string;
  Rated: string;
}

export default function ApiService() {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchMovie = async (query: string) => {
    const apiKey = "7c28e0b1";
    const response = await fetch(
      `https://www.omdbapi.com/?t=${query}&apikey=${apiKey}`
    );
    const data = await response.json();

    if (data.Response === "True") {
      setMovie(data);
      setError(null);
    } else {
      setMovie(null);
      setError("NO MOVIE WAS FOUND!!!");
    }
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (error) {
      timer = setTimeout(() => {
        setError(null);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [error]);

  return (
    <div className="relative h-screen flex flex-col items-center justify-center">
      <Searchbar onSearch={fetchMovie} />
      {movie && <Details movie={movie} onClose={() => setMovie(null)} />}
      {error && (
        <div className="absolute top-1/2 transform -translate-y-1/2 font-bold text-white flicker-out-1">
          {error}
        </div>
      )}
    </div>
  );
}
