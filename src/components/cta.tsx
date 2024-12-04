import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";
import ContactImage from "/public/images/contact.jpg";

const Cta = () => {
  return (
    <Container className="py-20">
      <div className="flex flex-col justify-between gap-20 rounded-2xl border bg-[radial-gradient(ellipse_30%_60%_at_100%_50%,hsla(var(--primary)_/_20%),#ffffff00)] pt-20 sm:pl-16 lg:flex-row lg:bg-[radial-gradient(ellipse_50%_50%_at_50%_120%,hsla(var(--primary)_/_20%),#ffffff00)] lg:pl-20">
        <div className="lg:texlf mx-auto max-w-md px-4 text-center md:px-0 lg:mx-0 lg:pb-20 lg:text-left">
          <p className="mb-6 font-medium">Besoin d'aide pour votre projet ?</p>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Obtenez un devis gratuitement
          </h2>
          <p className="text-lg text-muted-foreground">
            Vous pouvez nous contacter via notre formulaire de contact en
            rentrant vos informations et nous vous recontacterons dans les plus
            brefs délais.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Link href="/contact">
              <Button>Nous contacter</Button>
            </Link>
            <a href="tel:+330646007242" className="flex items-center">
              <Button variant="outline">
                <Phone className="mr-1 h-full w-4" />
                06 46 00 72 42
              </Button>
            </a>
          </div>
        </div>
        <div className="w-full pl-4 sm:pl-0">
          <Image
            src={ContactImage}
            alt="placeholder"
            className="size-full max-h-[400px] rounded-br-2xl rounded-tl-2xl object-cover"
          />
        </div>
      </div>
    </Container>
  );
};

export default Cta;
