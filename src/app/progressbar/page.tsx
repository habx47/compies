import { ReactNode } from "react";
import { styled } from "styled-components";
import ProgressBar from "../_components/progressbar";

export default function Page(): ReactNode {
  return (
    <Wrapper>
      <ProgressBar value={50} size="large" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;
