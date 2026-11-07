import { ReactNode } from "react";
import { BreadCrumbs, Crumbs } from "../_components/breadcrumbs";
import { styled } from "styled-components";

export default function Page(): ReactNode {
  return (
    <Wrapper>
      <BreadCrumbs>
        <Crumbs href="/" isCurrentPage={true}>
          Home
        </Crumbs>
        <Crumbs href="/shop">Shop</Crumbs>
        <Crumbs href="/shop/cart">Cart</Crumbs>
      </BreadCrumbs>
    </Wrapper>
  );
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;
