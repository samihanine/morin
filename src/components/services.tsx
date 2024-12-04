import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getServices } from "@/data/services";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";

const Services = () => {
  const services = getServices();
  return (
    <Container className="pb-10">
      <div className="mx-auto flex max-w-screen-sm flex-col items-center gap-5 text-center">
        <Badge variant="outline" className="text-primary border-primary">
          <span>Services</span>
        </Badge>
        <h2 className="text-3xl font-semibold md:text-5xl">
          Nos services de charpente
        </h2>
        <p className="text-muted-foreground md:text-lg">
          Nous offrons des services de charpente, de menuiserie et de rénovation
          avec des matériaux de qualité.
        </p>
      </div>
      <div className="mt-20 grid gap-6 md:grid-cols-4 lg:gap-10">
        {services.map((service) => (
          <Link
            key={service.title}
            className="flex flex-col rounded-lg border"
            href={`/services/${service.slug}`}
          >
            <Image
              src={service.mainImage}
              alt={service.title}
              className="aspect-video size-full rounded-t-lg object-cover"
            />

            <div className="p-6">
              <h3 className="mb-2.5 font-semibold md:text-lg">
                {service.title}
              </h3>
              <button className="flex items-center gap-1 text-sm">
                En savoir plus
                <ChevronRight className="h-auto w-4" />
              </button>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Services;
