import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  NEXT,
  PREVIOUS,
  RESET,
} from "../actions/moviesActions";
import { movies } from "../movies";

const initialState = {
  movies: movies,
  favoriteMovies: [],
  sayfa: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT:
      if (state.sayfa + 1 < state.movies.length) {
        return {
          ...state,
          sayfa: state.sayfa + 1,
        };
      } else {
        return state;
      }

    case PREVIOUS:
      if (state.sayfa > 0) {
        return {
          ...state,
          sayfa: state.sayfa - 1,
        };
      } else {
        return state;
      }
    case ADD_FAVORITE:
      // if (
      //   state.favoriteMovies.find((movie) => movie.id === action.payload.id)
      // ) {
      //   return state;
      // } else {
      //   return {
      //     ...state,
      //     favoriteMovies: [...state.favoriteMovies, action.payload],
      //   };
      // }
      return {
        ...state,
        movies: state.movies.filter((movie) => movie !== action.payload),
        favoriteMovies: [...state.favoriteMovies, action.payload],
      };
    case RESET:
      return {
        ...state,
        sayfa: initialState.sayfa,
      };
    case REMOVE_FAVORITE:
      const { payload } = action;

      return {
        ...state,
        favoriteMovies: state.favoriteMovies.filter(
          (movie) => movie.id !== payload
        ),
        movies: [
          ...state.movies,
          state.favoriteMovies.find((movie) => movie.id === payload),
        ],
        sayfa: state.sayfa === -1 ? 0 : state.sayfa,
      };

    default:
      return state;
  }
};

export default reducer;
