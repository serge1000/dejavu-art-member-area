import { useEffect } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Button, Divider, Drawer, Typography, useMediaQuery, Link } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { NavItem } from './nav-item';

import { Dashboard as DashboardIcon } from '../icons/dashboard';
import { MyImages as MyImagesIcon } from '../icons/myimages';
import { Findings as FindingsIcon } from '../icons/findings';
import { Account as AccountIcon } from '../icons/account';
import { Billing as BillingIcon } from '../icons/billing';
import { Support as SupportIcon } from '../icons/support';
import { FAQ as FAQIcon } from '../icons/faq';
import { Guide as GuideIcon } from '../icons/guide';

const items = [
  {
    href: '/',
    icon: (<DashboardIcon fontSize="small" />),
    title: 'Dashboard'
  },
  {
    href: '/myimages',
    icon: (<MyImagesIcon fontSize="small" />),
    title: 'My Images'
  },
  {
    href: '/account',
    icon: (<AccountIcon fontSize="small" />),
    title: 'Account'
  },
  {
    href: '/billing',
    icon: (<BillingIcon fontSize="small" />),
    title: 'Billing'
  },
  {
    href: '/support',
    icon: (<SupportIcon fontSize="small" />),
    title: 'Support'
  },
  {
    href: '/faq',
    icon: (<FAQIcon fontSize="small" />),
    title: 'FAQ'
  },
  {
    href: '/guide',
    icon: (<GuideIcon fontSize="small" />),
    title: 'Guide'
  }
];

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <div>
          <Box sx={{ p: 3}}>
            <NextLink
              href="/"
              passHref
            >
              <a style={{ textDecoration: 'none' }}>
              <Typography
                  color="white"
                  variant="subtitle1"
                >
                DejaVu.Art
                </Typography>
              </a>
            </NextLink>
          </Box>
          <Box sx={{ px: 2 }}>
            <Box
              sx={{
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                px: 3,
                py: '11px',
                borderRadius: 1
              }}
            >
              <div>
                <Typography
                  color="inherit"
                  variant="subtitle1"
                >
                  Welcome Sergei!
                </Typography>
                <Typography
                  color="neutral.400"
                  variant="body2"
                >
                  Plan
                  {' '}
                  : Standard
                  {' '}
                <NextLink
                  href="#"
                  passHref
                >
                  <Link
                    color="#6367ed"
                    underline="always"
                    variant="subtitle2"
                  >
                    (Upgrade)
                  </Link>
                </NextLink>

                </Typography>
              </div>
            </Box>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: '#2D3748',
            my: 3
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
        <Divider sx={{ borderColor: '#2D3748' }} />
        
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
