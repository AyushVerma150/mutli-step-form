import React from 'react';

import styles from './Forms.module.css';

const CheckOut = () =>
{
    return (
        <div className={styles.divStyle}>
            <p className={styles.formHeading}>You have filled the form <strong>Successfully</strong></p>
        </div>
    );
};

export default CheckOut;