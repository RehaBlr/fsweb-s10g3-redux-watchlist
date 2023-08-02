import { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";

import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  previousMovie,
  nextMovie,
  resetList,
} from "./actions/moviesActions";

function App() {
  // const [sira, setSira] = useState(0);
  const sira = useSelector((store) => store.sayfa);
  const favMovies = useSelector((store) => store.favoriteMovies);
  const movies = useSelector((store) => store.movies);

  // function sonrakiFilm() {
  //   setSira(sira + 1);
  // }
  const dispatch = useDispatch();

  const handlePreviousMovie = () => {
    dispatch(previousMovie());
  };
  const handleNextMovie = () => {
    dispatch(nextMovie());
  };
  const handleAddFavorite = (movie) => {
    dispatch(addFavorite(movie));
  };
  const handleReset = () => {
    dispatch(resetList());
  };

  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink
          to="/"
          exact
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Filmler
        </NavLink>
        <NavLink
          to="/listem"
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          {/* <Movie sira={sira} /> */}
          <Movie />

          <div className="flex gap-3 justify-end py-3">
            <button
              onClick={handleReset}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Başa Dön
            </button>
            <button
              onClick={handlePreviousMovie}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Önceki
            </button>
            <button
              onClick={handleNextMovie}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Sıradaki
            </button>
            <button
              onClick={() => handleAddFavorite(movies[sira])}
              className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white"
            >
              Listeme ekle
            </button>
          </div>
        </Route>

        <Route path="/listem">
          <div>
            {favMovies.map((movie) => (
              <FavMovie key={movie.id} title={movie.title} id={movie.id} />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
