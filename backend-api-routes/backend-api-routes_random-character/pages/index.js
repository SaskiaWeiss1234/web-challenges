import useSWR from "swr";


export default function HomePage() {
  const { data, isLoading } = useSWR("/api/random-character");

  if(isLoading) {
    return <h1>Loading...</h1>
  }
  if (!data) {
    return;
  }

  return (
    <div>
      <h1>Character Card</h1>
      <p>{data.firstName} {data.lastName}</p>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
      <p>{data.twitter}</p>
      <p>{data.geohash}</p>
    </div>
  )
}
