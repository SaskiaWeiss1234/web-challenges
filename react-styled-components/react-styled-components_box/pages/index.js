import BoxWithStyledComponents from "@/components/BoxWithStyledComponents.js";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import StyledBox from "@/components/BoxWithStyledComponents.js";
import styled from "styled-components";
export default function HomePage() {
  const HorizontalBoxes = styled.div`
  display: flex;`
  return (
    <HorizontalBoxes>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents $isBlack />

    </HorizontalBoxes>
  );
}
