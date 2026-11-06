"use client";

import { ReactNode } from "react";
import { styled } from "styled-components";

type CrumbProps = {
  href: string;
  isCurrentPage?: boolean | undefined;
  children: ReactNode;
};

function BreadCrumbs({ children }: { children: ReactNode }): ReactNode {
  return (
    <nav>
      <BreadcrumbList>{children}</BreadcrumbList>
    </nav>
  );
}

function Crumbs({ href, isCurrentPage, children }: CrumbProps): ReactNode {
  return (
    <CrumbWrapper>
      <CrumbLink href={href} aria-current={isCurrentPage ? "page" : undefined}>
        {children}
      </CrumbLink>
    </CrumbWrapper>
  );
}

const BreadcrumbList = styled.ol`
padding: 0;
margin: 0;
list-style: none;
`;

const CrumbWrapper = styled.li`
display: inline;
--spacing: 12px;

&:not(:first-of-type) {
  margin-left: var(--spacing);

  &::before {
    content: "";
    display: inline-block;
    height: 0.85em;
    margin-right: var(--spacing);
    border-right: 0.1em solid currentColor;
    transform: rotate(15deg);
    opacity: 0.4
  }
}
`;

const CrumbLink = styled.a`
color: inherit;
text-decoration: none;

&:hover {
text-decoration: revert;
}
`;

export { BreadCrumbs, Crumbs };
