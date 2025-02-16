import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import { About, Contact, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works } from './components';
import AddedContacts from './components/AddedContacts';
import CustomCursor from './components/CustomCursor';
import { SpeedDial } from '@mui/material';
import { trackPageView } from './utils/ga4';

const TrackPageView = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return null;
};

const App = () => {
  return (
    <Router>
      <TrackPageView />
      <div className='hidden sm:block'>
        <CustomCursor />
      </div>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <AddedContacts />
          {/* <Contact /> */}
          <StarsCanvas />
        </div>
      </div>
    </Router>
  );
};

export default App;
