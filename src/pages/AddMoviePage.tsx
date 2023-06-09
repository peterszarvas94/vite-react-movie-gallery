import type { Input, Movie } from '../utils/types';
import { useContext } from 'react';
import { AppContext } from "../utils/AppContext";
import Form from '../components/Form';

export default function AddMoviePage() {

  const { movies, setMovies, setRoute } = useContext(AppContext);

  async function onSubmit(data: Input) {
    const newMovie: Movie = {
      id: movies.length + 1,
      title: data.title,
      description: data.description,
      ageRating: data.ageRating,
    };
    setMovies([...movies, newMovie]);
    setRoute({ page: "home" });
  }

  return (
    <main className="bg-secondary text-primary min-h-screen">
      <h1 className="text-5xl max-w-xl mx-auto text-center font-title py-10">Add movie</h1>
      <Form onSubmit={(data) => onSubmit(data)} backLink={{ page: "home" }} />
    </main>
  );
}
