import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { AccountProfile } from '../components/account/account-profile';
import { AccountProfileDetails } from '../components/account/account-profile-details';
import { DashboardLayout } from '../components/dashboard-layout';
import { SearchImages } from "src/components/findings/searchimages";
import { ProductCard } from "../components/product/product-card";
import { products } from "../__mocks__/products";

const Findings = () => (
  <>
    <Head>
      <title>
      Findings | DejaVu.Art
      </title>
    </Head>

    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          Findings
        </Typography>
        <Grid container spacing={3}>
          <Grid item xl={12} lg={12} sm={12} xs={12}>
            <SearchImages />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Findings.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Findings;
