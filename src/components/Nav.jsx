import * as React from "react";
import styled from "styled-components";

const StyledNav = styled.div`
  background: ${(props) => props.theme.colors.shadowBlue};
`;

export default function Nav() {
  return <StyledNav>NAVBAR</StyledNav>;
}
