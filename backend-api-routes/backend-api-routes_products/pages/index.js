import  useSWR  from "swr";
import { fetcher } from "./_app";
import Link from "next/link";

 

export default function HomePage() {
  const { data, isLoading, error } = useSWR("/api/products", fetcher);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  else if (error) {
    return <h1>Error: {error.message}</h1>;
  }
console.log(data);
  return (
    <div>
      <h1>Products</h1>
    <ul>
      {data?.map((product) => (
        <li key={product.id}>
          <Link href={`/${product.id}`}>
            {product.name}
          </Link>
        </li>
      ))}
    </ul>
    </div>
  );
}
