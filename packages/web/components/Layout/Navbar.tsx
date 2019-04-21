import React from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Link from "next/link";
import remcalc from "remcalc";
import Router from "next/router";

interface LiProps {
  active?: string;
}

const Li = styled.li<LiProps>`
  display: inline;
  list-style: none;
  font-size: ${remcalc(30)};
  text-decoration: ${(props: any) =>
    props.active === "true" ? "overline" : "none"};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  const path = Router.pathname;

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
        <Li active={getActive("/")}>write</Li>
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
