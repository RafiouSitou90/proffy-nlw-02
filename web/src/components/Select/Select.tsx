import React, { FunctionComponent, SelectHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    options: Array<{
        value: string;
        label: string
    }>;
}

const Select: FunctionComponent<InputProps> = ({ label, name, options, ...rest }) => {

    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select value="" id={name} { ...rest }>
                <option value="" disabled hidden>Select the option</option>
                {options.map((option) => {
                    return (
                        <option value={option.value} key={option.value}>{option.label}</option>
                    );
                })}
            </select>
        </div>
    );
};

export default Select;
