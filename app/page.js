import Hero from '@/components/hero/Hero';
import Welcome from '@/components/sections/Welcome';
import Services from '@/components/services/Services';
import Gallery from '@/components/gallery/Gallery';
import Testimonials from '@/components/testimonials/Testimonials';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services showCTA={true} />
      <Welcome />
      <Gallery limit={6} />
      <Testimonials limit={4} />
    </>
  );
}
