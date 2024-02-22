import { Divider, Skeleton } from '@mui/material';
import React from 'react';
import { Space } from './Space';

export interface ListShimmerProps {
  length?: number;
}

const ListShimmer: React.FC<ListShimmerProps> = ({ length }) => {
  return (
    <div data-testid="listShimmer">
      {Array.from({ length: length ?? 10 })?.map((_, i) => (
        <div key={i}>
          <Skeleton height={40} variant="rectangular" />
          <Space top={10} />
          <Divider />
          <Space bottom={10} />
        </div>
      ))}
      <Skeleton height={30} />
    </div>
  );
};
export default ListShimmer;
