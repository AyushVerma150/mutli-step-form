

import { useFormikContext } from 'formik';

import
{
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} from "@material-ui/pickers";

import DateFnsUtils from "@date-io/date-fns";
import styles from './UI.module.css';

const DatePickerComponent = ( props ) =>
{

    const { setFieldValue } = useFormikContext();

    return (
        <div className={styles.divStyle}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    id="date-picker-dialog"
                    autoComplete='off'
                    className={styles.inputStyle}
                    label="Date of Birth"
                    inputVariant="outlined"
                    format="mm/dd/yyyy"
                    value={props.value}
                    error={props.error}
                    helperText={props.helperText}
                    onChange={value => setFieldValue( "dateOfBirth", value )}
                    KeyboardButtonProps={{
                        "aria-label": "change date"
                    }}
                />
            </MuiPickersUtilsProvider>
        </div>

    );

};

export default DatePickerComponent;

