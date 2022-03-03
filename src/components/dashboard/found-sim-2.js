import { Card, CardContent, Grid, Typography } from '@mui/material';

export const FoundSim2 = (props) => (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            Found Similar Images (within last 2 days)
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            2
          </Typography>
        </Grid>

      </Grid>
      
    </CardContent>
  </Card>
);
