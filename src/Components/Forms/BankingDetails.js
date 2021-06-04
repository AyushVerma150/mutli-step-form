import React from 'react';

import Input from '../UI/Input';
import DatePicker from '../UI/DatePicker';
import { useFormikContext } from 'formik';

import styles from './Forms.module.css';

const BankingDetails = ( props ) =>
{
    const { setFieldValue } = useFormikContext();

    return (
        <div>
            This is Banking details Form
            <Input
                name="firstName"
                label="First Name"
                value={props.formProps.values.firstName}
                changed={props.formProps.handleChange}
                error={props.formProps.touched.firstName && Boolean( props.formProps.errors.firstName )}
                helperText={props.formProps.touched.firstName && props.formProps.errors.firstName}
            />
            <Input
                name="lastName"
                label="Last Name"
                value={props.formProps.values.lastName}
                changed={props.formProps.handleChange}
                error={props.formProps.touched.lastName && Boolean( props.formProps.errors.lastName )}
                helperText={props.formProps.touched.lastName && props.formProps.errors.lastName}
            />
            <Input
                name="streetAddress"
                label="Street Address"
                value={props.formProps.values.streetAddress}
                changed={props.formProps.handleChange}
                error={props.formProps.touched.streetAddress && Boolean( props.formProps.errors.streetAddress )}
                helperText={props.formProps.touched.streetAddress && props.formProps.errors.streetAddress}
            />
            <Input
                name="city"
                label="City"
                value={props.formProps.values.city}
                changed={props.formProps.handleChange}
                error={props.formProps.touched.city && Boolean( props.formProps.errors.city )}
                helperText={props.formProps.touched.city && props.formProps.errors.city}
            />
            <DatePicker
                value={props.formProps.values.dateOfBirth}
                error={props.formProps.touched.dateOfBirth && Boolean( props.formProps.errors.dateOfBirth )}
                helperText={props.formProps.touched.dateOfBirth && props.formProps.errors.dateOfBirth}
            />
        </div>
    );
};

export default BankingDetails;