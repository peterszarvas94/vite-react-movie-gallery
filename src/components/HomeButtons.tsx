import { useContext } from "react";
import { AppContext } from "../utils/AppContext";
import { sample } from "../utils/sample";

export default function HomeButtons() {

  const { movies, setMovies, setRoute } = useContext(AppContext);

  const generateSampleMovies = async () => {
    let newMovies = [...movies];

    for (let i = 0; i < sample.movies.length; i++) {
      const sampl = sample.movies[i];
      newMovies.push({
        id: newMovies.length + 1,
        title: sampl.title,
        description: sampl.description,
        ageRating: sampl.ageRating,
      });
    }

    setMovies(newMovies);
  };

  return (
    <div className="flex gap-4 w-fit mx-auto">
      <button
        className="bg-white text-primary w-fit mx-auto p-2 shadow-weak shadow-btn-primary border-[1px] border-primary font-body"
        onClick={() => setRoute({ page: "add" })}
      >
        Add movie
      </button>
      <button
        className="bg-white text-primary w-fit mx-auto p-2 shadow-weak shadow-primary border-[1px] border-primary font-body"
        onClick={() => generateSampleMovies()}
      >
        Generate sample movies
      </button>
    </div>
  );
}
