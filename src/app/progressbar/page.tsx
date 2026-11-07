import { ReactNode } from "react";
import { styled } from "styled-components";
import ProgressBar from "../_components/progressbar";

export default function Page(): ReactNode {
  return (
    <Wrapper>
      <Header>Progress Bar</Header>
      <ProgressBar value={50} size="large" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const Header = styled.h1`
font-size: 1.3rem;
`;
