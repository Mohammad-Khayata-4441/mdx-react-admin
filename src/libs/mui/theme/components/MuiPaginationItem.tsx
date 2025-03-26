import { Components, Theme } from '@mui/material';

export const MuiPaginationItem: Components<Theme>['MuiPaginationItem'] = {
  styleOverrides: {
    root: (t) => ({
      borderRadius: '8px',
      border: `1px solid ${t.theme.palette.divider}`,
      margin: '0rem 0.1rem',
      background: t.theme.palette.background.paper,
      '&.Mui-selected': {
        transform: 'scale(1.25)',
        zIndex: '10',
        fontSize: 12,
        background: `linear-gradient(0deg,${t.theme.palette.primary.main} 100%, ${t.theme.palette.secondary.main} 100%);`,
        color: t.theme.palette.primary.contrastText,
      },
    }),
  },
};
