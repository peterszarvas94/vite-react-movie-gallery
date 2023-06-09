import type { Movie, Route } from "../utils/types";
import { ReactNode, createContext, useState } from "react";

type AppContextType = {
  movies: Movie[];
  setMovies: (movies: Movie[]) => void;
  route: Route;
  setRoute: (route: Route) => void;
};

export const AppContext = createContext<AppContextType>({} as AppContextType);

export default function AppContextProvider({ children }: { children: ReactNode }) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [route, setRoute] = useState<Route>({ page: "home" });

  return (
    <AppContext.Provider value={{
      movies, setMovies,
      route, setRoute
    }}>
      {children}
    </AppContext.Provider>
  );
}
