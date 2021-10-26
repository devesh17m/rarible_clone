import React from 'react'
import Header from './components/Header'
import SlideHp from './components/SliderHP'
import TopCollection from './components/TopCollection'
import Hotbid from './components/Hotbid'
import BestSeller from './components/BestSeller'
import LiveAution from './components/LiveAution'
import HotCollection from './components/HotCollection'
import Explore from './components/Explore'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <SlideHp />
      <TopCollection />
      <Hotbid />
      <BestSeller />
      <LiveAution />
      <HotCollection />
      <Explore />
      <Footer />
    </div>
  );
}

export default App;
