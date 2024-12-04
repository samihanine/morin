import { cn } from "@/lib/utils";
import Image, { type ImageProps } from "next/image";
import LogoImage from "/public/images/logo-large.png";

export default function Logo({ className }: { className?: string }) {
  return (
    <Image
      className={cn("h-12 w-auto", className)}
      src={LogoImage}
      alt="La Charpenterie Morin"
    />
  );
}
