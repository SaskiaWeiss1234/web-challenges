 import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";
import { fetcher } from "@/pages/_app";
import { styled } from "styled-components";

const ProductContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: grey;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export default function ProductPage() {
    const router = useRouter();
    const { id } = router.query;
    const { data, isLoading, error } = useSWR(`/api/products/${id}`, fetcher);
    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (error) {
        return <h1>Error: {error.message}</h1>;
    }
    if (!data) {
        return <h1>Loading...</h1>;
    }
    return (
        <>
        <ProductContainer>
            <small>ID: {id}</small>
            <h1>Product Details</h1>
            <p>Name: {data.name}</p>
            <p>Description: {data.description}</p>
            <p>Price: {data.price} {data.currency}</p>
            <p>Category: {data.category}</p>
        </ProductContainer>
        
         <Link href="/">Back to Products</Link>
         </>
    );
} 

        
    