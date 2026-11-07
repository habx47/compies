import { ReactNode } from "react";
import RadioGroup from "../_components/radiogroup";
import { styled } from "styled-components";

export default function Page(): ReactNode {
  return (
    <Wrapper>
      <Header>Radio Group</Header>

      <RadioGroup
        groupTitle="Select language"
        groupItems={["english", "urdu", "kashmiri"]}
        itemName="current-language"
      />
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
