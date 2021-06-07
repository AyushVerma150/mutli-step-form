import React from "react";
import { useFormikContext } from 'formik';

import ImagePreview from '../UI/ImagePreview';
import Input from '../UI/Input';

import CONSTANTS from '../../Constants/Constants';

import styles from './Forms.module.css';

const IdentityProof = ( props ) =>
{
    const { setFieldValue } = useFormikContext();
    const handleFileChange = ( e ) =>
    {
        if ( e.target.name === CONSTANTS.FIELDS.FRONT_PROOF_TITLE )
        {
            setFieldValue( CONSTANTS.FIELDS.FRONT_PROOF_TITLE, e.currentTarget.files[0] );
        }
        else
        {
            setFieldValue( CONSTANTS.FIELDS.BACK_PROOF_TITLE, e.currentTarget.files[0] );
        }
    };

    return (
        <div>
            <p className={styles.formHeading}>{CONSTANTS.FORM_HEADING.IDENTITY_PROOF}</p>
            <Input
                name={CONSTANTS.FIELDS.FRONT_PROOF_TITLE}
                type="file"
                onChange={( e ) => { handleFileChange( e ) }}
                error={props.formProps.touched.proofFront && Boolean( props.formProps.errors.proofFront )}
                helperText={props.formProps.touched.proofFront && props.formProps.errors.proofFront}
            />
            {props.formProps.values.proofFront ? <ImagePreview file={props.formProps.values.proofFront} /> : null}

            <Input
                name={CONSTANTS.FIELDS.BACK_PROOF_TITLE}
                type="file"
                onChange={( e ) => { handleFileChange( e ) }}
                error={props.formProps.touched.proofBack && Boolean( props.formProps.errors.proofBack )}
                helperText={props.formProps.touched.proofBack && props.formProps.errors.proofBack}
            />
            {props.formProps.values.proofBack ? <ImagePreview file={props.formProps.values.proofBack} /> : null}

        </div >
    );
}

export default IdentityProof;


