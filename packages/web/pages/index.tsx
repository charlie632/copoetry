import * as React from "react";
import styled from "styled-components";
import { Grid, Button } from "@material-ui/core";

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

export default () => (
  <Grid>
    <Title>Hello</Title>
    <Button color="primary" variant="contained">
      hello
    </Button>
  </Grid>
);
