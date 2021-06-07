import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Input from '../UI/Input';

import CONSTANTS from '../../Constants/Constants';

import styles from './Forms.module.css';


const BusinessProfile = ( props ) =>
{
    return (
        <div className={styles.divStyle}>
            <p className={styles.formHeading}>{CONSTANTS.FORM_HEADING.BUSINESS_PROFILE}</p>
            <Avatar
                className={styles.avatarStyle}
                src={CONSTANTS.UI.DUMMY_AVATAR}
                alt={CONSTANTS.UI.IMG_UN_AVAILABlE}
            />
            <Input
                name={CONSTANTS.FIELDS.BUSINESS_NAME_TITLE}
                label={CONSTANTS.FIELDS.BUSINESS_NAME_LABEL}
                value={props.formProps.values.businessName}
                onChange={props.formProps.handleChange}
                error={props.formProps.touched.businessName && Boolean( props.formProps.errors.businessName )}
                helperText={props.formProps.touched.businessName && props.formProps.errors.businessName}
            />
            <Input
                name={CONSTANTS.FIELDS.BUSINESS_WEBSITE_TITLE}
                label={CONSTANTS.FIELDS.BUSINESS_WEBSITE_LABEL}
                value={props.formProps.values.businessWebsite}
                onChange={props.formProps.handleChange}
                error={props.formProps.touched.businessWebsite && Boolean( props.formProps.errors.businessWebsite )}
                helperText={props.formProps.touched.businessWebsite && props.formProps.errors.businessWebsite}
            />
        </div>
    );
};


export default BusinessProfile;