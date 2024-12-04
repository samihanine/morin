import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getNavigation } from "@/data/navigation";

export default async function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const links = await getNavigation();
  return (
    <>
      <Header links={links} />
      {children}
      <Footer links={links} />
    </>
  );
}
