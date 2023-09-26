import './App.css';
import Row from './components/Row';
import requests from './request';
function App() {
  return (
   <>
   <Row title="Netflix Original" fetchUrl={requests.fetchNetflixOriginals}/>
   </>
  );
}

export default App;
