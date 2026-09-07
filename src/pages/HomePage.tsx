import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import PresentationSection from '@/components/sections/PresentationSection';
import CourseSection from '@/components/sections/CourseSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import DiscoverySection from '@/components/sections/DiscoverySection';
import RestaurantSection from '@/components/sections/RestaurantSection';
import EventsSection from '@/components/sections/EventsSection';
import GallerySection from '@/components/sections/GallerySection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ReservationSection from '@/components/sections/ReservationSection';
import LocationSection from '@/components/sections/LocationSection';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PresentationSection />
        <CourseSection />
        <ExperienceSection />
        <DiscoverySection />
        <RestaurantSection />
        <EventsSection />
        <GallerySection />
        <TestimonialsSection />
        <ReservationSection />
        <LocationSection />
      </main>
      <Footer />
    </>
  );
}
