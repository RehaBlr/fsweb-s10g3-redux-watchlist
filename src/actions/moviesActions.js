export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const NEXT = "NEXT";
export const PREVIOUS = "PREVIOUS";
export const RESET = "RESET";

export const previousMovie = () => {
  return { type: PREVIOUS };
};

export const nextMovie = () => {
  return { type: NEXT };
};

export const resetList = () => {
  return { type: RESET };
};

export const addFavorite = (movie) => {
  console.log(movie);

  return { type: ADD_FAVORITE, payload: movie };
};

export const removeFavorite = (id) => {
  return { type: REMOVE_FAVORITE, payload: id };
};
