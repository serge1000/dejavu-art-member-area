import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Budget } from '../components/dashboard/budget';
import { LatestOrders } from '../components/dashboard/latest-orders';
import { LatestProducts } from '../components/dashboard/latest-products';
import { Sales } from '../components/dashboard/sales';
import { TasksProgress } from '../components/dashboard/tasks-progress';
import { TotalCustomers } from '../components/dashboard/total-customers';
import { TotalProfit } from '../components/dashboard/total-profit';
import { TrafficByDevice } from '../components/dashboard/traffic-by-device';
import { DashboardLayout } from '../components/dashboard-layout';
import { PlanBox } from 'src/components/dashboard/plan-box';
import { SearchImages } from 'src/components/dashboard/searchimages';

import { RecentFindingsList } from '../components/recent-findings/recent-findings-list';
import { recent_findings } from '../__mocks__/recent_findings';
import { customers } from '../__mocks__/customers';


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



          <Grid container spacing={3} sx={{ mt: 1 }}>
            <Grid item xl={12} lg={12} sm={12} xs={12}>
              <SearchImages />
            </Grid>
          </Grid>

          <Grid
            item
            lg={12}
            sm={12}
            xl={12}
            xs={12}
          >

            <RecentFindingsList recent_findings={recent_findings} />

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
