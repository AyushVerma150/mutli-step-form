
import moment from 'moment';

export const validateDateOfBirth = ( dateOfBirth ) =>
{

    const startDate = new Date( 1900, 12, 31 );
    const endDate = new Date( 2007, 12, 31 );
    if ( moment( dateOfBirth, moment.ISO_8601 ).isValid() )
    {
        return moment( dateOfBirth ).isBetween( startDate, endDate );
    }
    return false;
};


export const validateBankAccount = ( bankAccount ) =>
{
    return ( bankAccount.length >= 11 && bankAccount.length <= 15 );
}