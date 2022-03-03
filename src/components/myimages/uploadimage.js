import { Card, CardContent, Grid, Typography,  Button, Divider, CardHeader, TextField } from '@mui/material';

export const UploadImage = (props) => (
    <form
    autoComplete="off"
    noValidate
    {...props}
  >
<Card>
        <CardHeader
            title="Add an image to search."
            subheader="Your plan allows to upload up to 30 images. 8 images left to upload. You can upload an image from your disk or from the Internet."
        />
        
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >

          <Grid
              item
              xl={3}
              lg={3}
              sm={12}
              xs={12}
            >
                <Button                     style={{maxWidth: '200px', maxHeight: '55px', minWidth: '200px', minHeight: '55px'}}
                    color="primary"
                    variant="contained"
                >
                    Upload Image
                </Button>
            </Grid>
            <Grid
              item
              xl={2}
              lg={2}
              sm={12}
              xs={12}
            >
      <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          OR
        </Typography>
            </Grid>

            <Grid
              item
              xl={5}
              lg={5}
              sm={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Enter Image URL"
                name="imageurl"

                variant="outlined" 
              />
            </Grid>

            <Grid
              item
              xl={2}
              lg={2}
              sm={12}
              xs={12}
            >
                <Button
                    color="primary"
                    variant="contained"
                    style={{maxWidth: '100px', maxHeight: '55px', minWidth: '100px', minHeight: '55px'}}
                >
                    Submit
                </Button >
            </Grid>
          </Grid>
        </CardContent>

      </Card>
  </form>
);
