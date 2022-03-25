import React from 'react';
import { Card as MaterialCard } from '@mui/material';

interface Props {
  minWidth?: number;
  children: React.ReactNode;
}

const Card: React.FC<Props> = ({ minWidth, children }) => {
  const width = minWidth === undefined ? 275 : minWidth;
  return (
    <MaterialCard sx={{ minWidth: width }}>
      {children}
    </MaterialCard>
  );
};

export default Card;
