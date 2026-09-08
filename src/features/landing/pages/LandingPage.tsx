import AboutSection from '../components/AboutSection';
import ComparisonSection from '../components/ComparisonSection';
import ContactSection from '../components/ContactSection';
import GallerySection from '../components/GallerySection';
import Hero from '../components/Hero';
import LandingFooter from '../components/LandingFooter';
import ServicesSection from '../components/ServicesSection';
import SiteHeader from '../components/SiteHeader';
import StatsStrip from '../components/StatsStrip';

/**
 * Página de un solo scroll para captación de clientes.
 * Orden: inicio → servicios → trabajos → comparativa → nosotros → stats → contacto.
 */
export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <ServicesSection />
        <GallerySection />
        <ComparisonSection />
        <AboutSection />
        <StatsStrip />
        <ContactSection />
      </main>
      <LandingFooter />
    </div>
  );
}