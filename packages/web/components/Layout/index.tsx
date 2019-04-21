import React from "react";
import Grid from "@material-ui/core/Grid";
import Logo from "./Logo";
import Link from "next/link";
import Navbar from "./Navbar";

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <Grid container justify="center">
          <Link href="/">
            <Logo>copoetry</Logo>
          </Link>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={10} md={6}>
        <Navbar />
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center">
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Layout;
