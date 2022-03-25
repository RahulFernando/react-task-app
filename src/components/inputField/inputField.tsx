import React from 'react';
import TextField from '@mui/material/TextField';
import { INPUT_TYPES } from '../../enum';

interface Props {
  label: string;
  type: INPUT_TYPES;
  name: string;
  error: boolean;
  helperText: string;
  autoComplete?: 'off' | 'on';
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<Props> = ({
  label,
  type,
  name,
  error,
  helperText,
  autoComplete,
  onChange,
}) => {
  const complete = autoComplete === undefined ? 'on' : autoComplete;
  return (
    <TextField
      name={name}
      type={type}
      error={error}
      label={label}
      helperText={helperText}
      autoComplete={complete}
      onChange={onChange}
    />
  );
};

export default InputField;
