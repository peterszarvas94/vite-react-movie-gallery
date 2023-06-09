import { useContext } from "react";
import { AppContext } from "../utils/AppContext";
import MovieDetails from "../components/MovieDetails";

export default function ViewMoviePage() {
  const { movies, route } = useContext(AppContext);

  if (route.page !== "view") return null;
  const movieId = route.id;
  const movie = movies.find(movie => movie.id === movieId);

  if (!movie) return null;

  return (
    <main className="bg-secondary text-primary min-h-screen">
      <MovieDetails movie={movie} />
    </main>
  )
}
