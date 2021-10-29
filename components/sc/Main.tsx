import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { CircularProgress, Grid } from "@mui/material";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { Box } from "@mui/system";

const MainContainer = styled("div")(
  ({ theme }) => `
  padding: ${theme.spacing(7)} 0;
`
);

const MainGridContainer = styled((props) => (
  <Grid container columnSpacing={4} {...props}>
    {props.children}
  </Grid>
))(
  ({ theme }) => `
`
);

const SidebarGridItem = styled((props) => (
  <Grid item md={2} {...props}>
    {props.children}
  </Grid>
))(
  ({ theme }) => `
  ${theme.breakpoints.down("md")} {
    display: none;
  }
`
);

const ContentGridItem = styled((props) => (
  <Grid item xs={12} md={10} {...props}>
    {props.children}
  </Grid>
))(
  ({ theme }) => `
`
);

const LoaderContainer = styled("div")`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => setIsLoading(false), 2000);
    }
  }, [isLoading]);

  return (
    <MainContainer>
      <MainGridContainer>
        <SidebarGridItem>
          <Sidebar setLoading={setIsLoading} />
        </SidebarGridItem>
        <ContentGridItem>
          {isLoading ? (
            <LoaderContainer>
              <CircularProgress />
            </LoaderContainer>
          ) : (
            <Content />
          )}
        </ContentGridItem>
      </MainGridContainer>
    </MainContainer>
  );
};

export default Main;
