import React from 'react';

import Input from '../UI/Input';
import DatePicker from '../UI/DatePicker';

import CONSTANTS from '../../Constants/Constants';

import styles from './Forms.module.css';

const BankingDetails = ( props ) =>
{

    return (
        <div>
            <p className={styles.formHeading}>{CONSTANTS.FORM_HEADING.BANKING_DETAILS}</p>
            <Input
                name={CONSTANTS.FIELDS.FIRST_NAME_TITLE}
                label={CONSTANTS.FIELDS.FIRST_NAME_LABEL}
                value={props.formProps.values.firstName}
                onChange={props.formProps.handleChange}
                error={props.formProps.touched.firstName && Boolean( props.formProps.errors.firstName )}
                helperText={props.formProps.touched.firstName && props.formProps.errors.firstName}
            />
            <Input
                name={CONSTANTS.FIELDS.LAST_NAME_TITLE}
                label={CONSTANTS.FIELDS.LAST_NAME_LABEL}
                value={props.formProps.values.lastName}
                onChange={props.formProps.handleChange}
                error={props.formProps.touched.lastName && Boolean( props.formProps.errors.lastName )}
                helperText={props.formProps.touched.lastName && props.formProps.errors.lastName}
            />
            <Input
                name={CONSTANTS.FIELDS.ADDRESS_TITLE}
                label={CONSTANTS.FIELDS.ADDRESS_LABEL}
                value={props.formProps.values.streetAddress}
                onChange={props.formProps.handleChange}
                error={props.formProps.touched.streetAddress && Boolean( props.formProps.errors.streetAddress )}
                helperText={props.formProps.touched.streetAddress && props.formProps.errors.streetAddress}
            />
            <Input
                name={CONSTANTS.FIELDS.CITY_TITLE}
                label={CONSTANTS.FIELDS.CITY_LABEL}
                value={props.formProps.values.city}
                onChange={props.formProps.handleChange}
                error={props.formProps.touched.city && Boolean( props.formProps.errors.city )}
                helperText={props.formProps.touched.city && props.formProps.errors.city}
            />
            <Input
                name={CONSTANTS.FIELDS.ZIP_TITLE}
                label={CONSTANTS.FIELDS.ZIP_LABEL}
                value={props.formProps.values.zip}
                onChange={props.formProps.handleChange}
                error={props.formProps.touched.zip && Boolean( props.formProps.errors.zip )}
                helperText={props.formProps.touched.zip && props.formProps.errors.zip}
            />
            <DatePicker
                name={CONSTANTS.FIELDS.DOB_TITLE}
                label={CONSTANTS.FIELDS.DOB_LABEL}
                value={props.formProps.values.dateOfBirth}
                error={props.formProps.touched.dateOfBirth && Boolean( props.formProps.errors.dateOfBirth )}
                helperText={props.formProps.touched.dateOfBirth && props.formProps.errors.dateOfBirth}
            />
            <Input
                name={CONSTANTS.FIELDS.SSN_TITLE}
                label={CONSTANTS.FIELDS.SSN_LABEL}
                value={props.formProps.values.ssnCode}
                onChange={props.formProps.handleChange}
                error={props.formProps.touched.ssnCode && Boolean( props.formProps.errors.ssnCode )}
                helperText={props.formProps.touched.ssnCode && props.formProps.errors.ssnCode}
            />
            <Input
                name={CONSTANTS.FIELDS.BANK_ACCOUNT_TITLE}
                label={CONSTANTS.FIELDS.BANK_ACCOUNT_LABEL}
                value={props.formProps.values.bankAccount}
                onChange={props.formProps.handleChange}
                error={props.formProps.touched.bankAccount && Boolean( props.formProps.errors.bankAccount )}
                helperText={props.formProps.touched.bankAccount && props.formProps.errors.bankAccount}
            />

        </div>
    );
};

export default BankingDetails;