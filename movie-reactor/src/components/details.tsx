import { useState } from "react";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./details-animation.css";

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

interface Props {
  movie: Movie | null;
  onClose: () => void;
}

export default function Details({ movie, onClose }: Props) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 2000);
  };

  console.log("isVisible:", isVisible);

  return (
    <aside
      className={`${isVisible ? "fade-in" : "fade-out"}
      h-[720px] w-[840px]
      absolute top-1/2 right-8 transform -translate-y-1/2
      rounded-xl bg-[#00000040] backdrop-blur-sm
      flex justify-center content-center items-center
      text-white transition-opacity duration-200`}
    >
      <FontAwesomeIcon
        icon={faCircleXmark}
        className="text-2xl absolute top-4 right-4 cursor-pointer"
        onClick={handleClose}
      />
      <section className="h-full w-1/2 m-4 flex flex-col justify-center content-center items-center text-center gap-4">
        <h2 className="h-auto w-auto text-3xl font-black">{movie?.Title}</h2>
        <img
          className="h-auto w-auto rounded-xl"
          src={movie?.Poster}
          alt={movie?.Title}
        />
        <p>
          <strong>{movie?.Plot}</strong>
        </p>
      </section>
      <section className="h-full w-1/2 m-4 flex flex-col justify-center content-center items-center gap-4 text-center">
        <p>
          <strong>Genre:</strong> {movie?.Genre}
        </p>
        <p>
          <strong>Director:</strong> {movie?.Director}
        </p>
        <p>
          <strong>Actors:</strong> {movie?.Actors}
        </p>
        <p>
          <strong>Language:</strong> {movie?.Language}
        </p>
        <p>
          <strong>Country:</strong> {movie?.Country}
        </p>
        <p>
          <strong>Awards:</strong> {movie?.Awards}
        </p>
        <p>
          <strong>IMDb Rating:</strong> {movie?.imdbRating}
        </p>
        <p>
          <strong>Metascore:</strong> {movie?.Metascore}
        </p>
        <p>
          <strong>Runtime:</strong> {movie?.Runtime}
        </p>
        <p>
          <strong>Released:</strong> {movie?.Released}
        </p>
        <p>
          <strong>Rated:</strong> {movie?.Rated}
        </p>
      </section>
    </aside>
  );
}
