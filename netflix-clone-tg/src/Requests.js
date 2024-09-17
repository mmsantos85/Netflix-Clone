// normally store in a env file

const API_KEY = 'd4e2448287553d83842f860fea84e802';

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
  fetchFantasyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
  fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
  fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  fetchDisneyMovies: `/discover/movie?api_key=${API_KEY}&with_companies=3475`,
  fetchEightiesMovies: `/discover/movie?api_key=${API_KEY}&primary_release_date.gte=1980-01-01&primary_release_date.lte=1989-12-31`,
  fetchNinetiesMovies: `/discover/movie?api_key=${API_KEY}&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31`,
  fetchZeroesMovies: `/discover/movie?api_key=${API_KEY}&primary_release_date.gte=2000-01-01&primary_release_date.lte=2009-12-31`,
  fetchActorMovies: `/discover/movie?api_key=${API_KEY}&with_people=6384`,

  fetchGenre: `/movie/460465?api_key=${API_KEY}`,
};

export default requests;
