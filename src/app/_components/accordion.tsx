"use client";

import { ReactNode } from "react";
import AccordionProvider, {
  AccordionContext,
  ItemValue,
} from "./accordion_provider";
import { styled } from "styled-components";
import { COLORS } from "../../../lib/helpers";
import React from "react";
import { ChevronDown } from "react-feather";

type TriggerProps = {
  value: ItemValue;
  children: ReactNode;
};

type ContentProps = {
  value: ItemValue;
  children: ReactNode;
};

function Accordion({ children }: { children: ReactNode }): ReactNode {
  return (
    <AccordionProvider>
      <Wrapper>{children}</Wrapper>
    </AccordionProvider>
  );
}

function Item({ children }: { children: ReactNode }): ReactNode {
  return <ItemWrapper>{children}</ItemWrapper>;
}

function useContext() {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error(
      "useContext should always be use within <AccordionProvider />",
    );
  }

  return context;
}

function Trigger({ value, children }: TriggerProps): ReactNode {
  const { content, displayContent } = useContext();
  const isShown = content.itemValue === value && content.isDisplayed;

  return (
    <TriggerHeading>
      <Button
        onClick={() => {
          displayContent(value);
        }}
        aria-expanded={isShown}
        aria-controls={value}
      >
        {children}
        <StyledChevron strokeWidth={1.5} $isShown={isShown} />
      </Button>
    </TriggerHeading>
  );
}

function Content({ value, children }: ContentProps): ReactNode {
  const { content } = useContext();
  const isShown = content.itemValue === value && content.isDisplayed;

  return (
    <ContentWrapper $isShown={isShown} role="region" aria-labelledby={value}>
      {children}
    </ContentWrapper>
  );
}

const Wrapper = styled.div`
--spacing: 20px;
width: 320px;
max-width: 100%;
border: 1px solid ${COLORS.dark};
border-radius: 4px;
`;

const ItemWrapper = styled.div`
&:not(:last-of-type) {
  border-bottom: 1px solid ${COLORS.dark};
}
`;

const TriggerHeading = styled.h3`
margin: 0;
`;

const Button = styled.button`
width: 100%;
height: 45px;
border: none;
background: transparent;
padding-left: var(--spacing);
padding-right: var(--spacing);
font-size: ${16 / 16}rem;
display: flex;
justify-content: space-between;
align-items: center;

&:focus {
  outline: 2px solid currentColor;
  -moz-outline-radius: 4px;
}
`;

const StyledChevron = styled(ChevronDown)<{ $isShown: boolean }>`
  transform: ${(props) => (props.$isShown ? "rotate(180ded)" : "rotate(0deg)")};
`;

const ContentWrapper = styled.div<{ $isShown: boolean }>`
padding: var(--spacing);
padding-top: 12px;
padding-bottom: 12px;
border-top: 1px solid ${COLORS.dark};
display: ${(props) => (props.$isShown ? "revert" : "none")};
`;

Accordion.Item = Item;
Accordion.Trigger = Trigger;
Accordion.Content = Content;

export default Accordion;
