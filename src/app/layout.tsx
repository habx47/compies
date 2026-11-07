import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import StyledComponentsRegistry from "../../lib/registry";
import { createGlobalStyle } from "styled-components";
import { Wrapper, Links, ContentWrapper } from "./_components/root_layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "compies",
  description: "unstyled component collection",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Wrapper>
            <Links />
            <ContentWrapper>{children}</ContentWrapper>
          </Wrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after, {
  box-sizing: border-box;
}

html, body {
  height: 100%;
  margin: 0;
}
`;
