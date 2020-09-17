export interface Episode {
  Title: string,
  Released: string,
  Episode: string,
  imdbRating: string,
  imdbID: string
}

export interface Season {
  episodes: [Episode],
  Season: string,
  Title: string,
  totalSeasons: string
}
