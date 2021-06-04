import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import { TextField } from '@material-ui/core';

const InputField = ( props ) =>
{

    const [field, meta] = useField( props );

    console.log( field );

    const displayText = () =>
    {
        const [touched, error] = at( meta, 'touched', 'error' );
        if ( touched && error )
        {
            return error;
        }
    }


    return (
        <>
            <label>
                Hey
                <input {...field} {...props} />
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
        // <TextField
        //     label={props.label}
        //     defaultValue={props.name}
        //     fullWidth
        //     value={field.name}
        //     onBlur={field.onBlur}
        //     onChange={field.onChange}
        // />
    );

};

export default InputField;