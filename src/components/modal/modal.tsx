import React from 'react';
import { Modal as MaterialModal } from '@mui/material';

interface Props {
    open: boolean;
    children: React.ReactElement<any>;
    onClose: () => void;
}

const Modal: React.FC<Props> = ({ open, children, onClose }) => (
    <MaterialModal open={open} onClose={onClose}>
        {children}
    </MaterialModal>
);

export default Modal;