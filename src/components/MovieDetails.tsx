import type { Movie } from "../utils/types";
import { useContext } from "react";
import { AppContext } from "../utils/AppContext";
import { AiOutlineUnorderedList } from "react-icons/ai";

interface Props {
  movie: Movie;
}

export default function MovieDetails({ movie }: Props) {

  const { movies, setMovies, setRoute } = useContext(AppContext);

  async function handleDelete() {
    const movieId = movie.id;
    const newMovies = movies.filter((movie) => movie.id !== movieId);
    console.log(newMovies);
    setMovies(newMovies);
    setRoute({ page: "home" });
  }

  return (
    <>
      <h1 className="text-5xl max-w-xl mx-auto text-center font-title py-10">{movie.title}</h1>

      <div className="bg-white w-full max-w-xl mx-auto p-4 shadow-strong shadow-accent border-primary border-[1px] font-body">
        <div className="pt-2">{movie.description}</div>
        <div className="py-2 grow">Age rating: {movie.ageRating}+</div>
      </div>

      <div className="max-w-xl mx-auto flex gap-4 justify-start pt-10">
        <div className="grow">
          <button
            className="bg-white border-[1px] border-primary p-3 shadow-weak shadow-btn-primary text-primary font-body flex items-center gap-2 w-fit"
            onClick={() => setRoute({ page: "home" })}
          >
            <AiOutlineUnorderedList />
            <span className="w-fit">Back</span>
          </button>
        </div>
        <button
          className="bg-white border-[1px] border-primary p-3 shadow-weak shadow-primary text-primary font-body"
          onClick={() => setRoute({ page: "edit", id: movie.id })}
        >
          Edit
        </button>
        <button
          className="bg-white border-[1px] border-primary p-3 shadow-weak shadow-primary text-primary font-body"
          onClick={() => handleDelete()}
        >
          Delete
        </button>

      </div>
    </>
  );
}
