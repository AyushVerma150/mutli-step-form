import * as Yup from 'yup';
import moment from 'moment';
import { formSchema } from './FormSchema';


export const formInitialValues =
{
    businessName: "",
    businessWebsite: "",
    firstName: "",
    lastName: "",
    dateOfBirth: null,
    streetAddress: "",
    city: ""
};

const isUrlValid = /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

export const formValidators = [
    Yup.object(
        {
            businessName:
                Yup
                    .string()
                    .required( "This is required field*" ),
            businessWebsite:
                Yup
                    .string()
                    .matches( isUrlValid, "Please enter a valid URL*" )
                    .required( "This is required field*" ),
        } ),
    Yup.object( {
        firstName:
            Yup
                .string()
                .required( "This is required field*" ),
        lastName:
            Yup
                .string()
                .required( "This is required field*" ),
        dateOfBirth:
            Yup
                .date()
                .nullable()
                .required( "This is required field*" )
                .test( "expDate", "You must be 13 years or older to use this app*", ( val ) =>
                {
                    if ( val )
                    {
                        console.log( "Inside Date Validation" )
                        const startDate = new Date( 1900, 12, 31 );
                        const endDate = new Date( 2007, 12, 31 );
                        if ( moment( val, moment.ISO_8601 ).isValid() )
                        {
                            console.log( "What am i ? ", val );
                            return moment( val ).isBetween( startDate, endDate );
                        }
                        return false;
                    }
                    return false;
                } ),
        streetAddress:
            Yup
                .string()
                .required( "This is required field*" ),
        city:
            Yup
                .string()
                .required( "This is required field*" ),
    } )
];