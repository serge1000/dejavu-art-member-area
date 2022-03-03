import { Card, CardContent, Grid, Typography } from '@mui/material';

export const FoundSim7 = (props) => (
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
            Found Similar Images (within last 7 days)
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            11
          </Typography>
        </Grid>

      </Grid>
      
    </CardContent>
  </Card>
);
