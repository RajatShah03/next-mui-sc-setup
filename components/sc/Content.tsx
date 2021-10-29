import React from "react";
import { styled } from "@mui/material/styles";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

const OuterContainer = styled("div")(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: ${theme.spacing(1)}
`
);

const InnerContainer = styled(OuterContainer)(
  ({ theme }) => `
  margin-bottom: ${theme.spacing(6)};
`
);

const CardActionsContainer = styled(CardActions)(
  ({ theme }) => `
  padding: ${theme.spacing(1)} ${theme.spacing(2)};
  justify-content: space-between
`
);

const RENDER_N: number = 10;

const Content = () => {
  return (
    <OuterContainer>
      {[...Array(RENDER_N).keys()].map((e) => (
        <InnerContainer key={e.toString()}>
          <Typography variant="h5" gutterBottom>
            Heading One
          </Typography>
          <br />
          <Grid container spacing={2}>
            {[1, 2, 3, 4, 5].map((item) => (
              <Grid key={item} item sm={12} md={3} lg={4} xl={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">Title</Typography>
                  </CardContent>
                  <CardContent>
                    <Typography variant="subtitle2">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nesciunt nihil hic aliquam pariatur provident iste.
                    </Typography>
                  </CardContent>
                  <CardActionsContainer>
                    <Typography variant="h4">21</Typography>
                    <Button>Click</Button>
                  </CardActionsContainer>
                </Card>
              </Grid>
            ))}
          </Grid>
        </InnerContainer>
      ))}
    </OuterContainer>
  );
};

export default Content;
