import './sass/main.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import Strip from './components/Strip';
import Presentation from './components/Presentation';
import Competences from './components/Competences';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Strip angle={1} />
      <Presentation />
      <Strip angle={-1} />
      <Competences />
      <Footer />
    </>
  );
}

export default App;
