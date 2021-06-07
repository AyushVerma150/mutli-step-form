import React from 'react';

import { TextField } from '@material-ui/core';

import CONSTANTS from '../../Constants/Constants';

import styles from './UI.module.css';

const Input = ( props ) =>
{
    return (
        <div className={styles.divStyle}>
            <TextField
                {...props}
                className={styles.inputStyle}
                autoComplete={CONSTANTS.UI.AUTOCOMPLETE}
                variant={CONSTANTS.UI.TEXT_FIELD_VARIANT}
            />
        </div>
    );
}

export default Input;