import Head from 'next/head';
import { Box, Container, Grid, Typography,Pagination } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { PlanBox } from 'src/components/dashboard/plan-box';
import { SearchImages } from 'src/components/dashboard/searchimages';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import { ProductCard } from "../components/product/product-card";
import { FoundImageCard } from "../components/dashboard/found-image-card";
import { RecentFindingsList } from '../components/recent-findings/recent-findings-list';
import { recent_findings } from '../__mocks__/recent_findings';
import { products } from "../__mocks__/products";

import { FoundSimAll } from 'src/components/dashboard/found-sim-all';
import { FoundSim7 } from 'src/components/dashboard/found-sim-7';
import { FoundSim2 } from 'src/components/dashboard/found-sim-2';

const Dashboard = () => (
  <>
    <Head>
      <title>
        Dashboard | DejaVu.Art
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
          Dashboard
        </Typography>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={12}
            sm={12}
            xl={12}
            xs={12}
          >
            <PlanBox />
          </Grid>

          <Grid
            item
            xl={4}
            lg={4}
            sm={12}
            xs={12}
          >
            <FoundSimAll />
          </Grid>
          <Grid
            item
            xl={4}
            lg={4}
            sm={12}
            xs={12}
          >
            <FoundSim7 />
          </Grid>
          <Grid
            item
            xl={4}
            lg={4}
            sm={12}
            xs={12}
          >
            <FoundSim2 />
          </Grid>

          <Grid item xl={12} lg={12} sm={12} xs={12}>
            <SearchImages />
          </Grid>

          <Grid item xl={12} lg={12} sm={12} xs={12}>
            <Typography sx={{ mt: 3 }} variant="h6">
              The following simularities found:
            </Typography>
        </Grid>

        <Grid item xl={12} lg={12} sm={12} xs={12}>
        <Box sx={{ pt: 3 }}>
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid item key={product.id} xl={2} lg={3} md={3} xs={12}>
                <FoundImageCard product={product} />
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
        </Grid>

        </Grid>
      </Container>
    </Box>
  </>
);

Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;
