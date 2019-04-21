import styled from "styled-components";
import remcalc from "remcalc";
import { body } from "../../src/utils/fonts";
export const Button = styled.button`
  background-color: ${({ theme }) => theme.background};
  border-radius: ${remcalc(5)};
  color: ${({ theme }) => theme.main};
  border-color: ${({ theme }) => theme.main};
  cursor: pointer;
  font-size: ${remcalc(20)};
  height: ${remcalc(50)};
  margin: ${remcalc(20)};
  font-family: ${body};
  &:hover {
    background-color: pink;
  }
`;
