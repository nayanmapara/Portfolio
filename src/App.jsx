import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works } from './components';
import AddedContacts from './components/AddedContacts';

import CustomCursor from './components/CustomCursor';
import { SpeedDial } from '@mui/material';

const App = () => {

  return (
    <BrowserRouter>

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
        <Feedbacks />
        <div className="relative z-0">
          <AddedContacts />
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
