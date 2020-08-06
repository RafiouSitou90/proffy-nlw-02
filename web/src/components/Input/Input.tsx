import React, { FunctionComponent, InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const Input: FunctionComponent<InputProps> = ({ label, name, ...rest }) => {

    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} { ...rest } />
        </div>
    );
};

export default Input;
