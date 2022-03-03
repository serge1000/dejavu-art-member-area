import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { AccountProfile } from '../components/account/account-profile';
import { AccountProfileDetails } from '../components/account/account-profile-details';
import { DashboardLayout } from '../components/dashboard-layout';

const Support = () => (
  <>
    <Head>
      <title>
      Support | DejaVu.Art
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
          Support
        </Typography>
        
      </Container>
    </Box>
  </>
);

Support.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Support;
