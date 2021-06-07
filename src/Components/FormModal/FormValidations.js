import * as Yup from 'yup';

import { validateDateOfBirth, validateBankAccount } from '../../Utils/Utils';

import CONSTANTS from '../../Constants/Constants';



export const formInitialValues =
{
    zip: "",
    city: "",
    ssnCode: "",
    lastName: "",
    firstName: "",
    proofBack: "",
    proofFront: "",
    bankAccount: "",
    businessName: "",
    streetAddress: "",
    dateOfBirth: null,
    businessWebsite: "",
};

export const formValidators = [
    Yup.object(
        {
            businessName:
                Yup
                    .string()
                    .required( CONSTANTS.FORMIK.REQUIRED_FIELD ),
            businessWebsite:
                Yup
                    .string()
                    .matches( CONSTANTS.URL.VALID_URL, CONSTANTS.FORMIK.BUSINESS_WEBSITE )
                    .required( CONSTANTS.FORMIK.REQUIRED_FIELD ),
        } ),
    Yup.object( {
        firstName:
            Yup
                .string()
                .required( CONSTANTS.FORMIK.REQUIRED_FIELD ),
        lastName:
            Yup
                .string()
                .required( CONSTANTS.FORMIK.REQUIRED_FIELD ),
        dateOfBirth:
            Yup
                .date()
                .nullable()
                .required( CONSTANTS.FORMIK.REQUIRED_FIELD )
                .test( "expDate", CONSTANTS.FORMIK.DATE_OF_BIRTH, ( val ) =>
                {
                    if ( val )
                    {
                        return validateDateOfBirth( val );
                    }
                    return false;
                } ),
        streetAddress:
            Yup
                .string()
                .required( CONSTANTS.FORMIK.REQUIRED_FIELD ),
        city:
            Yup
                .string()
                .required( CONSTANTS.FORMIK.REQUIRED_FIELD ),
        ssnCode:
            Yup
                .string()
                .required( CONSTANTS.FORMIK.REQUIRED_FIELD )
                .length( 4, CONSTANTS.FORMIK.SSN_CODE ),
        bankAccount:
            Yup
                .string()
                .required( CONSTANTS.FORMIK.REQUIRED_FIELD )
                .test( 'bankAccount', CONSTANTS.FORMIK.BANK_ACCOUNT, ( val ) =>
                {
                    if ( val )
                    {
                        return validateBankAccount( val );
                    }
                    return false;
                } ),
        zip:
            Yup
                .string()
                .required( CONSTANTS.FORMIK.REQUIRED_FIELD )
                .length( 6, CONSTANTS.FORMIK.ZIP ),
    } ),
    Yup.object( {
        proofFront:
            Yup
                .mixed()
                .required( CONSTANTS.FORMIK.REQUIRED_FIELD ),
        proofBack:
            Yup
                .mixed()
                .required( CONSTANTS.FORMIK.REQUIRED_FIELD )
    } )
];