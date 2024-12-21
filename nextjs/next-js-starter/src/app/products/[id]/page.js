export default async function Products({ params }) {
  let args = await params;
  return <h1>Product page with id {args.id}</h1>;
}
