import * as React from "react";
import Head from "next/head";
import { Box, Container, Grid, Typography, Pagination } from "@mui/material";
import { products } from "../__mocks__/products";
import { DashboardLayout } from "../components/dashboard-layout";
import { PlanBox } from "src/components/dashboard/plan-box";
import { UploadImage } from "src/components/myimages/uploadimage";
import { RecentFindingsList } from "../components/recent-findings/recent-findings-list";
import { recent_findings } from "../__mocks__/recent_findings";
import { ProductCard } from "../components/product/product-card";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const MyImages = () => (
  <>
    <Head>
      <title>My Images | DejaVu.Art</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <Typography sx={{ mb: 3 }} variant="h4">
          My Images
        </Typography>
        <Grid container spacing={3}>
          <Grid item xl={12} lg={12} sm={12} xs={12}>
            <UploadImage />
          </Grid>
        </Grid>

        <FormControl>
          <Typography sx={{ mt: 3 }} variant="h6">
            Sort:
          </Typography>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="WithSimularitiesFirst"
              control={<Radio />}
              label="With simularities first"
            />
            <FormControlLabel value="UploadDates" control={<Radio />} label="Upload dates" />
          </RadioGroup>
        </FormControl>

        <Box sx={{ pt: 3 }}>
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid item key={product.id} xl={2} lg={3} md={3} xs={12}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: 3,
          }}
        >
          <Pagination color="primary" count={3} size="small" />
        </Box>
      </Container>
    </Box>
  </>
);

MyImages.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default MyImages;
