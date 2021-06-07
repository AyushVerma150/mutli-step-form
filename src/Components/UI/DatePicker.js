
import { useFormikContext } from 'formik';
import
{
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import CONSTANTS from '../../Constants/Constants';

import styles from './UI.module.css';

const DatePickerComponent = ( { name, value, error, label, helperText } ) =>
{

    const { setFieldValue } = useFormikContext();

    const dateChangeHandler = ( date ) =>
    {
        setFieldValue( name, date );
    };

    return (
        <div className={styles.divStyle}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    value={value}
                    error={error}
                    label={label}
                    helperText={helperText}
                    onChange={dateChangeHandler}
                    className={styles.inputStyle}
                    autoComplete={CONSTANTS.UI.AUTOCOMPLETE}
                    format={CONSTANTS.UI.DATE_PICKER_FORMAT}
                    inputVariant={CONSTANTS.UI.DATE_PICKER_VARIANT}
                    KeyboardButtonProps={{
                        "aria-label": "change date"
                    }}
                />
            </MuiPickersUtilsProvider>
        </div>

    );

};

export default DatePickerComponent;

