import React from 'react';

import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';

import Input from '../UI/Input';
import styles from './Forms.module.css';


const BusinessProfile = ( props ) =>
{
    return (
        <div className={styles.divStyle}>
            <p className={styles.formHeading}>Enter Your Business Details</p>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{ height: "90px", width: "100px", margin: "0 auto" }} />
            <Input
                name="businessName"
                label="Business Name"
                value={props.formProps.values.businessName}
                changed={props.formProps.handleChange}
                error={props.formProps.touched.businessName && Boolean( props.formProps.errors.businessName )}
                helperText={props.formProps.touched.businessName && props.formProps.errors.businessName}
            />
            <Input
                name="businessWebsite"
                label="Business Website"
                value={props.formProps.values.businessWebsite}
                changed={props.formProps.handleChange}
                error={props.formProps.touched.businessWebsite && Boolean( props.formProps.errors.businessWebsite )}
                helperText={props.formProps.touched.businessWebsite && props.formProps.errors.businessWebsite}
            />
        </div>
    );
};


export default BusinessProfile;