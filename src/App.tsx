import { BackgroundVideo } from './components/BackgroundVideo';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CustomCursor } from './components/CustomCursor';
import { SelectedWork } from './components/SelectedWork';
import { ZeroCoCaseStudy } from './Pages/ZeroCoCaseStudy';
import { EcommerceAnalytics } from './Pages/EcommerceAnalytics';
import { NetflixAnalytics } from "./Pages/NetflixAnalytics";
import { GeelongAnalytics } from './Pages/GeelongAnalytics';
import { RSPCACaseStudy } from './Pages/RSPCACaseStudy';

export default function App() {
  const path = window.location.pathname;

  // ZeroCo case study page
  if (path === '/work/zeroco') {
    return (
      <div className="relative min-h-screen w-full overflow-x-hidden">
        <CustomCursor />
        <Navbar />
        <ZeroCoCaseStudy />
      </div>
    );
  }

   if (path === '/work/ecommerce-analytics') {
    return (
      <div className="relative min-h-screen w-full overflow-x-hidden">
        <CustomCursor />
        <Navbar />
        <EcommerceAnalytics />
      </div>
    );
  }

  if (path === "/work/netflix-analytics") {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <NetflixAnalytics />
    </div>
  );
}

if (path === "/work/geelong-analytics") {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <GeelongAnalytics />
    </div>
  );
}

/* ADD RSPCA HERE */
if (path === '/work/rspca') {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <RSPCACaseStudy />
    </div>
  );
}
  // Homepage
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden select-none">
      <div className="relative h-screen">
        <BackgroundVideo />
        <CustomCursor />
        <Navbar />
        <Hero />
      </div>

      <SelectedWork />
    </div>
  );
}