import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Routes from './config/Routes';

function App() {
  return (
    <BrowserRouter>
      <Route render={props => (
        <>
          <Header {...props}/>
          <Routes/>
          <Footer
            content = "Kuikr es una página con fines didácticos en la que se muestran contenidos sobre series y películas, espero que lo estes disfrutando"
            githubLink= "https://github.com/eduroyu"
          />
        </>
      )}/>
    </BrowserRouter>
  );
}

export default App;
