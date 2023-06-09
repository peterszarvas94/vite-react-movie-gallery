import type { AgeRating } from "../utils/types";
import { useContext, useState } from "react";
import { AppContext } from "../utils/AppContext";
import AgeSelect from "./AgeSelect";
import Movies from "./Movies";

export default function MovieList() {

  const [value, setValue] = useState<AgeRating>(18);
  const { movies } = useContext(AppContext);

  return (
    <>
      <h2 className="font-body text-md pt-10 pb-4 w-fit mx-auto">Filter by age rating</h2>
      <div className="w-fit mx-auto justify-center pb-10">
        <AgeSelect value={value} setValue={(n) => {
          setValue(n)
        }} />
      </div>

      <Movies value={value} movies={movies} />
    </>
  );
}
