import { Button } from '@material-ui/core';

import styles from './UI.module.css';

const ButtonComponent = ( { children, clicked } ) =>
{


    return (
        <div className={styles.divStyle} style={{ float: "right" }}>
            <Button
                type="submit"
                color="primary"
                onClick={clicked}
                variant="contained"
                className={styles.btnStyle}
            >
                {children}
            </Button>
        </div>
    )
};

export default ButtonComponent;