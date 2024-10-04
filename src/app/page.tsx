import Header from '@components/Header';
import About from '@components/About';
import Proyects from '@components/Proyects';
import Woe from '@components/WorkExperience';
import Studies from '@components/Studies';
import Footer from '@components/Footer';
import React from 'react';

export default function Home() {
  return (
   <>
   <Header></Header>
   <section id="about" >
   <About></About>
   </section>
   <section id="projects" >
   <Proyects></Proyects>
    </section>
    <section id='experience'>
   <Woe></Woe>
   </section>
   <section id='Studies'>
    <Studies></Studies>
    </section>
    <Footer></Footer>
   </>
  );
}
