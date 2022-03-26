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
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<Props> = ({
  label,
  type,
  name,
  error,
  helperText,
  autoComplete,
  value,
  onChange,
}) => {
  const complete = autoComplete === undefined ? 'on' : autoComplete;
  return (
    <TextField
      style={{ width: '500px' }}
      name={name}
      type={type}
      error={error}
      label={label}
      value={value}
      helperText={helperText}
      autoComplete={complete}
      onChange={onChange}
    />
  );
};

export default InputField;
