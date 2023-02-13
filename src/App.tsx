import React from 'react';
import {
  Navbar,
  Headline,
  Banner,
  Carousel,
  Popular,
  AdBanner,
  Footer,
} from './features';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Headline />
      <Banner />
      <Carousel />
      <Popular />
      <AdBanner />
      <Footer />
    </div>
  );
}

export default App;
