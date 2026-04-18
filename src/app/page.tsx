import Hero from "@/components/sections/Hero";
import ValueProps from "@/components/sections/ValueProps";
import DoctorProfile from "@/components/sections/DoctorProfile";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProps />
      <DoctorProfile />
      <Services />
      <Contact />
    </>
  );
}
