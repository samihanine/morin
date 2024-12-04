export default async function Page({
  params,
}: {
  params: Promise<{
    service: string;
  }>;
}) {
  const { service } = await params;
  console.log(service);
  return <></>;
}
