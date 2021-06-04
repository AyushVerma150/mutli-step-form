import React from 'react';

import { TextField } from '@material-ui/core';

import styles from './UI.module.css';

const Input = ( props ) =>
{
    return (
        <div className={styles.divStyle}>
            <TextField
                variant="outlined"
                className={styles.inputStyle}
                name={props.name}
                label={props.label}
                value={props.value}
                onChange={props.changed}
                error={props.error}
                helperText={props.helperText}
                autoComplete='off'
            />
        </div>
    );
}

export default Input;