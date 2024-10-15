import './sass/main.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import Strip from './components/Strip';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Strip angle={1} />
      <Footer />
    </>
  );
}

export default App;
