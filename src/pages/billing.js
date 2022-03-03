import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { AccountProfile } from '../components/account/account-profile';
import { AccountProfileDetails } from '../components/account/account-profile-details';
import { DashboardLayout } from '../components/dashboard-layout';

const Billing = () => (
  <>
    <Head>
      <title>
        Billing | DejaVu.Art
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          Billing
        </Typography>
        
      </Container>
    </Box>
  </>
);

Billing.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Billing;
