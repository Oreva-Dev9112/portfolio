import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Stack } from '@/components/Stack';
import { Stats } from '@/components/Stats';
import { Now } from '@/components/Now';
import { Work } from '@/components/Work';
import { Building } from '@/components/Building';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';

export default function Page() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Nav />
      <Hero />
      <Stack />
      <Stats />
      <Now />
      <Work />
      <Building />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
