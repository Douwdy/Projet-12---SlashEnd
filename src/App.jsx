import './sass/main.scss';
import Header from './components/header/index';
import Footer from './components/footer/index';
import Projects from './components/projects/index';
import Presentation from './components/presentation/index';
import Products from './components/products/index';
import Hero from './components/hero/index';
import EmojiRain from './components/emojiRain';
import Skills from './components/skills/index';


function App() {
  return (
    <>
      <Header />
        <EmojiRain />
        <main id="index">
        <Hero />
        <Presentation />
        <Skills />
        <Products />
        <Projects />
        </main>
      <Footer />
    </>
  );
}

export default App;