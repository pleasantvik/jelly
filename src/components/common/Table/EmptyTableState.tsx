import { TableCell, TableRow, Typography } from '@mui/material';
import React from 'react';

interface IAppTabEmptyStateProps {
  Illustration?: React.ReactNode;
  title?: string;
  message?: string;
}

const AppTabEmptyState = ({
  Illustration = '',
  title,
  message,
}: IAppTabEmptyStateProps) => {
  return (
    <TableRow style={{ height: 500 }}>
      <TableCell align="center" colSpan={7} rowSpan={2}>
        {Illustration}
        <Typography
          fontSize={20}
          mt={3}
          fontWeight="bold"
          gutterBottom
          textAlign="center"
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.title"
          mb={3}
          textAlign="center"
        >
          {message}
        </Typography>
      </TableCell>
    </TableRow>
  );
};

export default AppTabEmptyState;
