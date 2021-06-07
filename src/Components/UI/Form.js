import React from 'react';

const form = ( { style, submitHandler, children } ) =>
{
    return (
        <form
            className={style}
            onSubmit={submitHandler}
        >
            {children}
        </form>
    );

};
export default form;