"use client";

import { ReactNode } from "react";
import { styled } from "styled-components";
import { COLORS } from "../../../lib/helpers";
import VisuallyHidden from "./visuallyhidden";

type SizeParams = {
  height: number;
  radius: number;
  padding: number;
};

type Styles = {
  small: SizeParams;
  medium: SizeParams;
  large: SizeParams;
};

type ProgressBarsProps = {
  value: number;
  size: keyof Styles;
};

const styles: Styles = {
  small: { height: 8, radius: 4, padding: 0 },
  medium: { height: 12, radius: 4, padding: 0 },
  large: { height: 16, radius: 8, padding: 4 },
};

function ProgressBar({ value, size }: ProgressBarsProps): ReactNode {
  const style = styles[size];

  if (!style) {
    throw new Error(`Unknown size passes: ${size}`);
  }

  return (
    <Wrapper
      role="progressbar"
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={value}
      style={{
        "--padding": style.padding + "px",
        "--radius": style.radius + "px",
      }}
    >
      <VisuallyHidden>{value}</VisuallyHidden>
      <BarWrapper>
        <Bar
          style={{
            "--width": value + "%",
            "--height": style.height + "px",
          }}
        />
      </BarWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  box-shadow: inest 0px 2px 4px ${COLORS.transparentGray35};
  background: ${COLORS.transparentGray15};
  padding: var(--padding);
  width: 500px;
  border-radius: var(--radius);
`;

const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
`;

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background: ${COLORS.blue};
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
