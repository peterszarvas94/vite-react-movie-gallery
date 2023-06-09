import type { Input, Movie } from "../utils/types";
import { useContext } from "react";
import { AppContext } from "../utils/AppContext";
import Form from "./Form";

interface Props {
  movie: Movie;
}

export default function EditMovie({ movie }: Props) {

  const { movies, setMovies, setRoute } = useContext(AppContext);
  const movieId = movie.id;

  async function handleSubmit(data: Input) {
    console.log(data);
    const newMovies = movies.map((movie) => {
      if (movie.id === movieId) {
        return {
          ...movie,
          ...data
        };
      }
      return movie;
    });
    setMovies(newMovies);
    setRoute({ page: "view", id: movieId });
  }

  return (
    <Form defaultValues={movie} onSubmit={(data) => handleSubmit(data)} backLink={{ page: "view", id: movieId }} />
  );
}
