import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import VideoBackgroundSection from './components/VideoBackgroundSection';
import AnimationSection from './components/AnimationSection'
import GetInTouch from './components/GetInTouch'

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={
          <>
            <Header />
            <VideoBackgroundSection />
            <AnimationSection />
            <GetInTouch />
            <Footer />
          </>
        } />
      </Routes>
    </Router>

  );
}

export default App;
