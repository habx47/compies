"use client";

import styled from "styled-components";
import Link from "next/link";
import { components } from "../../../lib/helpers";
import { ReactNode } from "react";

export function Links(): ReactNode {
  return (
    <LinkWrapper>
      {components.map((component) => {
        return (
          <StyledLink key={component.name} href={component.path}>
            {component.name}
          </StyledLink>
        );
      })}
    </LinkWrapper>
  );
}

const LinkWrapper = styled.div`
flex-basis: 200px;
display: flex;
flex-direction: column;
`;

export const Wrapper = styled.div`
height: 100%;
display: flex;
`;

const StyledLink = styled(Link)`
text-transform: capitalize;
text-decoration: none;
color: currentColor;
font-size: 1.1rem;
border-right:  1px solid currentColor;
border-bottom: 1px solid currentColor;
padding: 12px 8px;
`;

export const ContentWrapper = styled.div`
flex-grow: 1;
display: flex;
justify-content: center;
align-items: center;
`;
