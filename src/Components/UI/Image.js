import React from 'react';

import CONSTANTS from '../../Constants/Constants';

import styles from './UI.module.css';

const Image = ( { src } ) =>
{
    return <img
        alt={CONSTANTS.UI.IMG_UN_AVAILABlE}
        className={styles.imgStyle}
        src={src} />
};

export default Image;