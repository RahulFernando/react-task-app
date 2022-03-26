import { FC, MouseEvent } from 'react';

import { Button as MaterialButton } from '@mui/material';

import { BUTTON_COLORS, BUTTON_TYPES } from '../../enum';

interface Props {
  label: string;
  type: BUTTON_TYPES;
  color?: BUTTON_COLORS;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<Props> = ({ label, type, color, onClick }) => {
  const buttonType: BUTTON_TYPES = type === undefined ? BUTTON_TYPES.BUTTON : type;
  const buttonColor: BUTTON_COLORS = color === undefined ? BUTTON_COLORS.PRIMARY : color;
  return (
      <MaterialButton type={buttonType} variant="contained" color={buttonColor} onClick={onClick}>{label}</MaterialButton>
  );
};

export default Button;
