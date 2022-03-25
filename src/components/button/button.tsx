import { FC, MouseEvent } from 'react';

import { Button as MaterialButton } from '@mui/material';

import { BUTTON_TYPES } from '../../enum';

interface Props {
  label: string;
  type: BUTTON_TYPES;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<Props> = ({ label, type, onClick }) => {
  const buttonType: BUTTON_TYPES = type === undefined ? BUTTON_TYPES.BUTTON : type;
  return (
      <MaterialButton type={buttonType} onClick={onClick}>{label}</MaterialButton>
  );
};

export default Button;
