import { Card, CardContent, Grid, Typography } from '@mui/material';

export const FoundSimAll = (props) => (
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
            Found Similar Images (total)
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            43
          </Typography>
        </Grid>

      </Grid>
      
    </CardContent>
  </Card>
);
