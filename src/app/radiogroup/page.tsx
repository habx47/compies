import { ReactNode } from "react";
import RadioGroup from "../_components/radiogroup";
import { styled } from "styled-components";

export default function Page(): ReactNode {
  return (
    <Wrapper>
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
