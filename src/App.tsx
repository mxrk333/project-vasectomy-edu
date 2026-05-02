import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Features from './components/Features';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Mission />
        <Features />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

export default App;
