import styled from "styled-components";
import remcalc from "remcalc";
import { animated } from "react-spring";
export const Title = styled(animated.h1)`
  color: ${({ theme }) => theme.main};
  font-size: ${remcalc(30)};
`;
