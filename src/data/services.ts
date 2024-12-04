import { StaticImageData } from "next/image";
import CharpenteImage from "/public/images/charpente.webp";
import ToitureImage from "/public/images/toiture.jpg";
import RenovationEnergetiqueImage from "/public/images/renovation-energetique.jpg";
import IsolationImage from "/public/images/isolation.jpg";

export type Service = {
  title: string;
  mainImage: StaticImageData;
  slug: string;
};

export const getServices = () => {
  const services: Service[] = [
    {
      title: "Charpente",
      mainImage: CharpenteImage,
      slug: "charpente",
    },
    {
      title: "Toiture",
      mainImage: ToitureImage,
      slug: "toiture",
    },
    {
      title: "Rénovation énergétique",
      mainImage: RenovationEnergetiqueImage,
      slug: "renovation-energetique",
    },
    {
      title: "Isolation",
      mainImage: IsolationImage,
      slug: "isolation",
    },
  ];

  return services;
};

export const getServiceBySlug = (slug: string) => {
  return getServices().find((service) => service.slug === slug);
};
