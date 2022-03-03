import { Card, CardContent, Grid, Typography } from '@mui/material';

export const PlanBox = (props) => (
  <Card {...props} 
  align="center"
  >
    <CardContent sx={{ m: -2 }}>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            Standard Plan (up to 30 images to search, 8 images left)
          </Typography>
    </CardContent>
  </Card>
);
