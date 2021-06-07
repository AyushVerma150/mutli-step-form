import React, { useState } from 'react';

import Image from './Image';

import styles from './UI.module.css';


const ImagePreview = ( props ) =>
{

    const [thumbNail, setThumbNail] = useState( null );

    if ( props )
    {
        let fileReader = new FileReader();
        fileReader.onloadend = () =>
        {
            setThumbNail( fileReader.result );
        };
        if ( props.file )
        {
            fileReader.readAsDataURL( props.file );
        }
    }


    return (
        <div className={styles.divStyle}>
            <Image src={thumbNail} />
        </div>
    )
};

export default ImagePreview;