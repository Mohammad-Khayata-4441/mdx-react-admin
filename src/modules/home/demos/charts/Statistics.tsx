import React from 'react';
import { Card, Typography, Box, Icon } from '@mui/material';
import {
  BoxesIcon,
  CollapseDownIcon,
  CollapseUpIcon,
  UsersIcon,
} from '@/app/components/Icons';

export default function Statistics() {
  interface StatItem {
    label: string;
    icon: React.ElementType;
    value: string;
    prefix: string;
    color: string;
  }
  const stats: Array<StatItem> = [
    {
      label: 'Earnings',
      icon: CollapseUpIcon,
      value: '152,000',
      prefix: '$',
      color: 'primary',
    },
    {
      label: 'Refunds',
      icon: CollapseDownIcon,
      value: '8,700',
      prefix: '$',
      color: 'error',
    },
    {
      label: 'New Users',
      icon: UsersIcon,
      value: '120',
      prefix: '+',
      color: 'primary',
    },
    {
      label: 'New Products',
      icon: BoxesIcon,
      value: '25',
      prefix: '+',
      color: 'primary',
    },
  ];

  return (
    <Card sx={{ p: 2 }}>
      <Typography color="primary" fontWeight={'bold'} variant="h6">
        Daily Statistics
      </Typography>

      <Box className="grid grid-cols-4" paddingY={3}>
        {stats.map((s) => (
          <Box key={s.label} display={'flex'} justifyContent={'center'}>
            <Box display={'flex'} flexDirection={'column'}>
              <div className="flex gap-4 justify-between items-center">
                <Typography variant="h6">{s.label}</Typography>
                <Box
                  borderRadius={'100%'}
                  sx={() => ({
                    // backgroundColor: palette.background.default,
                    width: 40,
                    height: 40,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // border: `2px solid ${palette.divider}`
                  })}
                >
                  <Icon color={s.color as any} sx={{ fontSize: 24 }}>
                    <s.icon />
                  </Icon>
                </Box>
              </div>

              <Typography
                fontSize={{
                  xs: 26,
                  md: 32,
                }}
                fontWeight={'bold'}
              >
                <span className="dark:text-gray-400 mx-1">{s.prefix}</span>
                {s.value}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Card>
  );
}
