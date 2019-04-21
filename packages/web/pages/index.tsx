import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import remcalc from "remcalc";
import { useSpring, animated } from "react-spring";
import { Button } from "../components/Layout/Button";

const Title = styled(animated.h1)`
  color: ${({ theme }) => theme.main};
  font-size: ${remcalc(30)};
`;

const Body = styled(animated.p)`
  font-size: ${remcalc(20)};
`;

export default () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 2000 }
  });
  return (
    <Layout>
      <Title style={props}>Welcome to -copoetry-</Title>
      <Body>
        copoetry is a new way to express yourself with the help of
        other annonymous writers. Just write one line of a new poem
        and it will be permanently added to our collection. No
        author's name at all. Completely annoynimous. Join the fun.
      </Body>
      <Button>Click here to start</Button>
    </Layout>
  );
};
