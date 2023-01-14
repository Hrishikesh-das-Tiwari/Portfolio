import { Fragment } from 'react';
import Navbar from './Navbar';
import Head from './Head';
import About from './About';
import Skills from './Skills';
import Tools from './Tools';
import Contact from './Contact';

export default function App() {
  return (
    <Fragment>
      <Navbar />
      <Head />
      <About />
      <Skills />
      <Tools />
      <Contact />
    </Fragment>
  );
}
