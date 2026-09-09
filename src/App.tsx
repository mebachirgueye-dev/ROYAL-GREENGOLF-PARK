import Header from "./components/Header";
import Hero from "./components/Hero";
import CoursePresentation from "./components/CoursePresentation";
import CourseMap from "./components/CourseMap";
import Experience from "./components/Experience";
import DiscoveryOffer from "./components/DiscoveryOffer";
import Restaurant from "./components/Restaurant";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Booking from "./components/Booking";
import Location from "./components/Location";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-sand-50">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 bg-gold-500 px-5 py-3 text-sm font-medium text-pine-950 transition-transform duration-200 focus:translate-y-0"
      >
        Aller au contenu principal
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <CoursePresentation />
        <CourseMap />
        <Experience />
        <DiscoveryOffer />
        <Restaurant />
        <Events />
        <Gallery />
        <Testimonials />
        <Booking />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
