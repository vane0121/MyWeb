import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Portfolio } from '@/components/portfolio';
import { Products } from '@/components/products';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Portfolio />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
