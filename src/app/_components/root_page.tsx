"use client";

import styled from "styled-components";
import { Wrapper } from "./root_layout";

export const Heading = styled.h1`
margin-top: 0px;
margin-bottom: 4px;

${Wrapper} & {
  align-self: center;
}
`;

export const Sub_Heading = styled.p`
margin: 0px;
font-size: 1.1rem;
`;
