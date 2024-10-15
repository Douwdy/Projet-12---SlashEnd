import './sass/main.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import Strip from './components/Strip';
import Presentation from './components/Presentation';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Strip angle={1} />
      <Presentation />
      <Footer />
    </>
  );
}

export default App;
