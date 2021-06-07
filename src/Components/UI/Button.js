import { Button } from '@material-ui/core';

import CONSTANTS from '../../Constants/Constants';

import styles from './UI.module.css';

const ButtonComponent = ( { children, clicked, type } ) =>
{
    return (
        <div className={styles.btnDivStyle} >
            <Button
                type={type}
                onClick={clicked}
                className={styles.btnStyle}
                color={CONSTANTS.UI.BUTTON_COLOR}
                variant={CONSTANTS.UI.BUTTON_VARIANT}
            >
                {children}
            </Button>
        </div> );
};

export default ButtonComponent;