import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const Title = styled.h1`
  color: ${({ theme }) => theme.main};
  font-size: 50px;
`;

export default () => (
  <Layout>
    <Title>About</Title>
  </Layout>
);
