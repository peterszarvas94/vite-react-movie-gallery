import { useContext } from "react";
import { AppContext } from "./utils/AppContext";
import AddMoviePage from "./pages/AddMoviePage";
import ViewMoviePage from "./pages/ViewMoviePage";
import EditMoviePage from "./pages/EditMoviePage";
import HomeButtons from "./components/HomeButtons";
import MovieList from "./components/MovieList";

function App() {
  const { route } = useContext(AppContext);

  if (route.page === "home") {
    return (
      <main className="bg-secondary text-primary min-h-screen flex flex-col">
        <h1 className="text-5xl text-center font-title py-10">Movies</h1>
        <HomeButtons />
        <MovieList />
      </main>
    )
  }

  if (route.page === "add") {
    return <AddMoviePage />
  }

  if (route.page === "view") {
    return <ViewMoviePage />
  }

  if (route.page === "edit") {
    return <EditMoviePage />
  }

  return (
    <>
      <h1>404</h1>
    </>
  )
}

export default App;
