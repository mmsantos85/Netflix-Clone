import React from 'react';
import Row from '../components/Row';
import useFetch from '../custom hooks/useFetch';
import requests from '../Requests';
import '../styles/MoviePage.css';

function MoviePage() {
  const Action = useFetch(requests.fetchActionMovies);
  const Comedy = useFetch(requests.fetchComedyMovies);
  const Thriller = useFetch(requests.fetchThrillerMovies);
  const Family = useFetch(requests.fetchFamilyMovies);
  const Fantasy = useFetch(requests.fetchFantasyMovies);
  const Crime = useFetch(requests.fetchCrimeMovies);
  const Adventure = useFetch(requests.fetchAdventureMovies);
  return (
    <div className="banner__contents__genres">
      <Row genre={Comedy} type="Komedie" id="1" />
      <Row genre={Action} type="Actie" id="2" />
      <Row genre={Thriller} type="Thriller" id="3" />
      <Row genre={Family} type="Familie" id="4" />
      <Row genre={Fantasy} type="Fantasie" id="5" />
      <Row genre={Crime} type="Misdaad" id="6" />
      <Row genre={Adventure} type="Avontuur" id="7" />
    </div>
  );
}

export default MoviePage;
