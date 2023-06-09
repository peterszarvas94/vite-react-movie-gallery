export type AgeRating = 0 | 12 | 16 | 18;

export type Input = {
  title: string,
  description: string,
  ageRating: AgeRating,
}

export type Movie = Input & {
  id: number;
}

export type Sample = {
  movies: Input[]
}

export type Route =
  { page: "home" } |
  { page: "add" } |
  { page: "edit", id: number } |
  { page: "view", id: number };
