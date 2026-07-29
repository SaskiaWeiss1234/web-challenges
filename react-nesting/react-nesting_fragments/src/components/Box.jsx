 function Box({ color }) {
  return <div className="box" style={{ backgroundColor: color }}></div>;
}
export default function Boxes() {
  return (
    <>
      <Box color="#007bff"></Box>
      <Box color="#fc3"></Box>
      <Box color="#ff3333"></Box>
    </>
    );
  }