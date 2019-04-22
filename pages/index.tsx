import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import remcalc from "remcalc";
import { useSpring, animated } from "react-spring";
import { Button } from "../components/Layout/Button";
import Link from "next/link";
import { Title } from "../components/Layout/Title";

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
        copoetry is a new way to express yourself with the help of other
        annonymous writers. Just write one line of a new poem and it will be
        permanently added to our collection. No author's name at all. Completely
        annonymoud.
      </Body>
      <Link href="/write">
        <Button>join the fun.</Button>
      </Link>
    </Layout>
  );
};
