import { ReactNode } from "react";
import { BreadCrumbs, Crumbs } from "../_components/breadcrumbs";

export default function Page(): ReactNode {
  return (
    <BreadCrumbs>
      <Crumbs href="/" isCurrentPage={true}>
        Home
      </Crumbs>
      <Crumbs href="/shop">Shop</Crumbs>
      <Crumbs href="/shop/cart">Cart</Crumbs>
    </BreadCrumbs>
  );
}
