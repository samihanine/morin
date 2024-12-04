import { Container } from "@/components/container";
import Link from "next/link";
import Logo from "./logo";

export async function Footer({
  links,
}: {
  links: { label: string; href: string }[];
}) {
  return (
    <section className="overflow-hidden bg-black pb-10 pt-20">
      <Container>
        <div className="flex flex-col sm:flex-row gap-x-20 gap-y-6">
          <div className="flex-1">
            <Link
              href="/"
              className="w-fit flex rounded-sm text-white text-4xl"
              aria-label="Home"
            >
              La Charpenterie Morin
            </Link>
            <p className="mt-10 text-md leading-relaxed text-slate-50 w-full max-w-sm">
              La Charpenterie Morin offre des services de charpente, de
              menuiserie et de rénovation à Pau et ses environs.
            </p>
          </div>
          <div className="flex-1">
            <p className="text-md font-semibold text-white">Nous contacter</p>

            <div className="flex flex-col mt-4 space-y-3 text-white text-sm">
              <a href="mailto:lacharpenteriemorin@gmail.com">
                lacharpenteriemorin@gmail.com
              </a>

              <a href="tel:+330646007242">06 46 00 72 42</a>

              <p>17 rue pasteur, 64320 bizanos</p>
            </div>
          </div>

          <div className="flex-1">
            <p className="text-md font-semibold text-white">Pages</p>
            <div className="mt-4 flex flex-col space-y-3">
              {links.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-md text-slate-100 duration-150 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <hr className="mt-16 border-gray-secondary-400/60" />
        <div className="flex w-full flex-col justify-between pt-8 sm:flex-row">
          <p className="text-md text-slate-200">
            © {new Date().getFullYear()} La Charpenterie Morin. Tout droits
            réservés.
          </p>
          <div className="mt-5 flex gap-3 sm:mt-0">
            <Link
              href="/gcu"
              className="text-md text-slate-100 underline duration-150 hover:text-white"
            ></Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
