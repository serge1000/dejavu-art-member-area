import PropTypes from "prop-types";
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography, Link } from "@mui/material";
import { Clock as ClockIcon } from "../../icons/clock";
import { Download as DownloadIcon } from "../../icons/download";
import NextLink from "next/link";

export const ImageCard = ({ product, ...rest }) => (
  <Card
    sx={{
      display: "flex",
      flexDirection: "column",
      height: "100%",
    }}
    {...rest}
  >
    <CardContent 
            sx={{
                width:  200,
                height: 200 
              }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          pb: 3,

        }}
      >
        <img className="image-recent-findings" src={product.media} />
      </Box>
    </CardContent>

    <Divider />
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid
          item
          sx={{
            alignItems: "center",
            display: "flex",
          }}
        >
          <Typography color="textSecondary" display="inline" variant="body2">
            Uploaded on {product.createdAt}
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            alignItems: "center",
            display: "flex",
          }}
        >
          <Typography color="textSecondary" display="inline" variant="body2">
          {product.totalDownloads} simularities found
          </Typography>
        </Grid>

      </Grid>
    </Box>
    <style jsx>{`
      .image-recent-findings {
        display: block;
        max-width: 150px;
        max-height: 150px;
        width: auto;
        height: auto;
        margin-right: 10px;
      }
    `}</style>
  </Card>
);

ImageCard.propTypes = {
  product: PropTypes.object.isRequired,
};
