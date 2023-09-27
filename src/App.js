import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import requests from './request';
function App() {
  return (
   <>
   <Nav/>
   <Banner fetchUrl={requests.fetchNetflixOriginals}/>
   <Row title="Netflix Original" isPoster={true} fetchUrl={requests.fetchNetflixOriginals}/>
   <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
   <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
   <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
   <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
   <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
   <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>

   </>
  );
}

export default App;
