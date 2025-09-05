import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Experience from '@/components/sections/experience';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Writing from '@/components/sections/writing';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
