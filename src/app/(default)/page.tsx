import Cta from "@/components/cta";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import Services from "@/components/services";

export default async function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Gallery />
      <Cta />
    </>
  );
}
