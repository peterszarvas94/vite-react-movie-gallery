import { useContext } from 'react';
import { AppContext } from '../utils/AppContext';
import EditMovie from '../components/EditMovie';

export default function EditMoviePage() {

  const { movies, route } = useContext(AppContext);

  if (route.page !== "edit") return null;

  const movieId = route.id;
  const movie = movies.find(movie => movie.id === movieId);

  if (!movie) return null;

  return (
    <main className="bg-secondary text-primary min-h-screen">
      <h1 className="text-5xl max-w-xl mx-auto text-center font-title py-10">Edit movie</h1>
      <EditMovie movie={movie} />
    </main>
  );
}
