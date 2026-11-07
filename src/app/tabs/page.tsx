"use client";

import { ReactNode } from "react";
import { styled } from "styled-components";
import Tabs from "../_components/tabs";

export default function Page(): ReactNode {
  return (
    <Wrapper>
      <Header>Tabs</Header>
      <Tabs>
        <Tabs.List>
          <Tabs.Trigger value="tab1">Account</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Password</Tabs.Trigger>
          <Tabs.Trigger value="tab3">Logout</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">
          <div>This is some content about Account Tab</div>
        </Tabs.Content>
        <Tabs.Content value="tab2">
          <div>This is some content about Password Tab</div>
        </Tabs.Content>
        <Tabs.Content value="tab3">
          <div>This is some content about Logout Tab</div>
        </Tabs.Content>
      </Tabs>
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
