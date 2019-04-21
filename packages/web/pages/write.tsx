import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Write from "../components/Write";
import remcalc from "remcalc";

const Title = styled.h1`
  color: ${({ theme }) => theme.main};
  font-size: ${remcalc(30)};
`;

export default () => (
  <Layout>
    <Title>Hello</Title>
    <Write />
  </Layout>
);
