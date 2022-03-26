import React from 'react';
import { Card as MaterialCard } from '@mui/material';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<Props> = ({ children, className }) => {
  return (
    <MaterialCard className={className}>
      {children}
    </MaterialCard>
  );
};

export default Card;
