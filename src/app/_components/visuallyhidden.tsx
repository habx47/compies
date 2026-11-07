import styled from "styled-components";

function VisuallyHidden({ children }) {
  return <Hidden>{children}</Hidden>;
}

const Hidden = styled.span`
  display: inline-block;
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
`;

export default VisuallyHidden;
