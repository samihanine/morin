import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "./container";
import HeroOneImage from "/public/images/hero-1.jpg";
import HeroTwoImage from "/public/images/hero-2.jpg";
import HeroThreeImage from "/public/images/hero-3.jpg";
import HeroFourImage from "/public/images/hero-4.jpg";
import Image from "next/image";
const Hero = () => {
  return (
    <Container>
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div className="container flex flex-col items-center py-16 text-center lg:mx-auto lg:items-start lg:py-20 lg:text-left">
          <p>Votre charpentier à Pau et ses environs</p>
          <h1 className="my-6 text-pretty text-3xl font-bold lg:text-6xl">
            La Charpenterie Morin
          </h1>
          <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
            La Charpenterie Morin offre des services de charpente, de menuiserie
            et de rénovation à Pau et ses environs.
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
            <Button className="w-full sm:w-auto">
              <ArrowRight className="mr-2 size-4" />
              Voir nos services
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="relative aspect-[7/8] size-full">
            <div className="absolute right-[50%] top-[12%] flex aspect-square w-[24%] justify-center rounded-lg border border-border bg-accent">
              <Image
                src={HeroOneImage}
                alt="Hero Image"
                className="object-cover w-full h-auto rounded-lg"
              />
            </div>
            <div className="absolute right-[50%] top-[36%] flex aspect-[5/6] w-2/5 justify-center rounded-lg border border-border bg-accent">
              <Image
                src={HeroTwoImage}
                alt="Hero Image"
                className="object-cover w-full h-auto rounded-lg"
              />
            </div>
            <div className="absolute bottom-[36%] left-[54%] flex aspect-[5/6] w-2/5 justify-center rounded-lg border border-border bg-accent">
              <Image
                src={HeroThreeImage}
                alt="Hero Image"
                className="object-cover w-full h-auto rounded-lg"
              />
            </div>
            <div className="absolute bottom-[12%] left-[54%]  flex aspect-square w-[24%] justify-center rounded-lg border border-border bg-accent">
              <Image
                src={HeroFourImage}
                alt="Hero Image"
                className="object-cover w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
