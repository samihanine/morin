import { Container } from "@/components/container";

export const metadata = {
  title: "CGU - La Charpenterie Morin",
};

export default async function ServicesPage() {
  return (
    <div className="bg-background">
      <Container className="py-10">
        <div dangerouslySetInnerHTML={{ __html: "" }} />
      </Container>
    </div>
  );
}
