import styled from "styled-components";
import remcalc from "remcalc";
import { title } from "../../src/utils/fonts";

const Logo = styled.h1`
  font-size: ${remcalc(60)};
  font-family: ${title};
  cursor: pointer;
`;
export default Logo;
