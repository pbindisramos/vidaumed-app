import Hero from "@/components/sections/Hero";
import ValueProps from "@/components/sections/ValueProps";
import DoctorProfile from "@/components/sections/DoctorProfile";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProps />
      <DoctorProfile />
      <Services />
      <Gallery />
      <Contact />
    </>
  );
}
