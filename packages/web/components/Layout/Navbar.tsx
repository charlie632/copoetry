import React from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Link from "next/link";
import remcalc from "remcalc";
import Router from "next/router";
import { useSpring, animated } from "react-spring";
interface LiProps {
  active?: string;
}

const Li = styled(animated.li)<LiProps>`
  display: inline;
  list-style: none;
  font-size: ${remcalc(28)};
  text-decoration: ${(props: any) =>
    props.active === "true" ? "overline !important" : "none"};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Navbar: React.FC<any> = () => {
  const [path, setPath] = React.useState("/");
  // const props = useSpring({ });

  React.useEffect(() => {
    setPath(Router.pathname);
  }, []);

  const getActive = (current: string) => {
    if (current === path) {
      return "true";
    } else {
      "false";
    }
  };
  return (
    <Grid container justify="space-around">
      <Link href="/">
        <Li active={getActive("/")}>home</Li>
      </Link>
      <Link href="/write">
        <Li active={getActive("/write")}>write</Li>
      </Link>
      <Link href="/browse">
        <Li active={getActive("/browse")}>browse</Li>
      </Link>
      <Link href="/about">
        <Li active={getActive("/about")}>about</Li>
      </Link>
      <Link href="/source">
        <Li active={getActive("/source")}>source</Li>
      </Link>
    </Grid>
  );
};

export default Navbar;
