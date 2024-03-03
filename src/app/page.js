
import Hero from './home/page'
import Predict from './predict/page';
import About from './aboutUs/page'
import Contact from './contactUs/page'
import Navbar from './navbar/page';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>

      <Navbar/>
    <main className='snap-mandatory h-screen snap-y overflow-auto scroll-smooth scrollbar-none'>
      <div className='snap-start h-screen'>
        <Hero/>
      </div>
      <div className='snap-start h-screen'>
        <Predict/>
      </div>
      <div className='snap-start h-screen pt-14'>
        <About/>
      </div>
      <div className='snap-start h-screen'>
        <Contact/>
      </div>
      <div className='snap-start '>
        <Footer/>
      </div>
    </main>
    </div>
  );
}
